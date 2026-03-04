# AI-Powered Wound Monitoring System

This project focuses on building an intelligent wound monitoring system that assists clinicians in assessing wound severity and tracking healing progression using deep learning.

The system uses U-Net for precise wound segmentation and CNN models for tissue classification. It automatically detects wound boundaries, segments affected regions, and classifies tissue types to support structured clinical evaluation.

A PWAT-based scoring mechanism is integrated to calculate wound severity. In addition, a regression-based healing trajectory model analyzes wound size reduction over time and provides predictive insights into recovery trends.

An interactive dashboard was developed to visualize:
- Segmentation mask overlays
- Wound boundary detection
- Severity scores
- Healing progression charts

The platform is designed for remote clinical use and can support telemedicine workflows by enabling data-driven wound assessment.

## Tech Stack

- Python
- TensorFlow / PyTorch
- OpenCV
- NumPy, Pandas
- Scikit-learn
- React (Frontend Dashboard)
- REST API Integration

## Key Capabilities

- Real-time wound segmentation
- Tissue classification
- Automated severity scoring
- Healing trend prediction
- Interactive clinical dashboard

## Future Scope

- Cloud deployment for scalable inference
- Integration with electronic health record systems
- Mobile-based image capture and monitoring
