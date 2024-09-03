
from flask import Flask, request, jsonify
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np

app = Flask(__name__)

# Sample job data categorized by domains
jobs = {
    'Data Science': ['Data Scientist', 'Data Analyst', 'Machine Learning Engineer'],
    'Web Development': ['Frontend Developer', 'Backend Developer', 'Full Stack Developer'],
    'Cyber Security': ['Security Analyst', 'Penetration Tester', 'Security Consultant'],
    'Software Engineering': ['Software Developer', 'Software Engineer', 'DevOps Engineer']
}

# Flatten the job list
all_jobs = [job for domain in jobs for job in jobs[domain]]

# Using TF-IDF for vectorization instead of CountVectorizer
vectorizer = TfidfVectorizer()
job_vectors = vectorizer.fit_transform(all_jobs)

def get_job_recommendations(domain):
    domain = domain.title()
    domain_jobs = jobs.get(domain, [])
    if not domain_jobs:
        return []

    domain_vectors = vectorizer.transform(domain_jobs)

    # Using cosine similarity to measure the similarity between jobs
    similarities = cosine_similarity(domain_vectors, job_vectors)

    # Getting the top 3 recommendations
    top_indices = np.argsort(-similarities, axis=1)[:, :3]
    top_recommendations = [all_jobs[i] for i in top_indices.flatten()]

    return top_recommendations

def check_accuracy(recommendations, domain):
    domain_jobs = jobs[domain]
    accurate_recommendations = [job for job in recommendations if job in domain_jobs]
    accuracy = len(accurate_recommendations) / len(recommendations) if recommendations else 0
    return accuracy

@app.route('/recommend', methods=['POST'])
def recommend():
    try:
        data = request.get_json()
        domain = data.get('domain')

        if not domain:
            return jsonify({'error': 'Domain is required'}), 400

        recommendations = get_job_recommendations(domain)
        
        if not recommendations:
            return jsonify({'error': f'No recommendations found for domain: {domain}'}), 404

        accuracy = check_accuracy(recommendations, domain)

        return jsonify({
            'domain': domain,
            'recommendations': recommendations,
            'accuracy': accuracy
        })
    except Exception as e:
        app.logger.error(f'Error: {e}')
        return jsonify({'error': 'An unexpected error occurred'}), 500

if __name__ == '__main__':
    app.run(debug=True)
