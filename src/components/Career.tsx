import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>DevOps Engineer</h4>
                <h5>Cloud Consultant</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Delivering enterprise cloud solutions on Microsoft Azure with focus on
              Kubernetes orchestration, Infrastructure as Code, and CI/CD automation.
              Building highly available and compliant cloud platforms for regulated environments.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Cloud Platform Operations</h4>
                <h5>7+ years experience</h5>
              </div>
              <h3>2017–24</h3>
            </div>
            <p>
              Enterprise cloud platform operations specializing in Azure and Kubernetes.
              Implemented Infrastructure as Code using Terraform and Ansible. Designed
              and maintained CI/CD pipelines with GitHub Actions and ArgoCD. Set up
              comprehensive monitoring solutions using Prometheus and Grafana.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Cross-functional Collaboration</h4>
                <h5>Enterprise Delivery</h5>
              </div>
              <h3>Ongoing</h3>
            </div>
            <p>
              Collaborating with product teams, security experts, and regional operations
              teams to deliver secure cloud architecture and compliant solutions in
              regulated enterprise environments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
