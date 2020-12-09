---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

1.  ***Generating anthropomorphic phantoms using fully unsupervised deformable image registration with convolutional neural networks***
    * *Authors:* **Junyu Chen**, Ye Li, Yong Du, Eric C. Frey
    * *Published in:* Medical Physics, 2020
    * *Paper link:* [https://aapm.onlinelibrary.wiley.com/doi/abs/10.1002/mp.14545](https://aapm.onlinelibrary.wiley.com/doi/abs/10.1002/mp.14545)
    * *PDF:* [Phantoms_2020_MedPhy.pdf](http://junyuchen245.github.io/files/Phantoms_2020_MedPhy.pdf)
    * *Code:* [Fully_Unsupervised_CNN_Registration_Keras](https://github.com/junyuchen245/Fully_Unsupervised_CNN_Registration_Keras)
    * *Description:* We treat CNN as an optimization tool that iteratively minimizes the loss function via reparametrization in each iteration. This means that the algorithm is fully unsupervised and thus **no prior training is required**. We generate phantom variations by warpping an XCAT phantom to capture the anatomical variations within the real human CT images.
    * <img src="/images/MedPhy_phantom.jpg" width="1000"/>
    * *Citation:*
        * *APA:* Chen, J., Li, Y., Du, Y. and Frey, E.C. (2020), Generating anthropomorphic phantoms using fully unsupervised deformable image registration with convolutional neural networks. <i>Medical Physics</i>. https://doi.org/10.1002/mp.14545
        * *BibTex:* @article{chen2020phantoms,
                    author = {Chen, Junyu and Li, Ye and Du, Yong and Frey, Eric C.},
                    title = {Generating Anthropomorphic Phantoms Using Fully Unsupervised Deformable Image Registration with Convolutional Neural Networks},
                    journal = {Medical Physics},
                    volume = {n/a},
                    number = {n/a},
                    pages = {},
                    doi = {10.1002/mp.14545},
                    url = {https://aapm.onlinelibrary.wiley.com/doi/abs/10.1002/mp.14545},}
                    
                   
2. ***Medical Image Segmentation via Unsupervised Convolutional Neural Network***     
    * *Authors:* **Junyu Chen**, Eric C. Frey
    * *Published in:* Medical Imaging with Deep Learning, 2020
    * *Paper link:* [https://openreview.net/forum?id=XrbnSCv4LU](https://openreview.net/forum?id=XrbnSCv4LU)
    * *PDF:* [Unsupervised_CNNseg.pdf](https://openreview.net/pdf?id=XrbnSCv4LU)
    * *Code:* [Unsuprevised_Seg_via_CNN](https://github.com/junyuchen245/Unsuprevised_Seg_via_CNN)
    * *Description:* For the majority of the learning-based segmentation methods, a large quantity of highquality training data is required. In this paper, we present a novel learning-based segmentation model that could be trained semi- or un- supervised. Specifically, in the unsupervised setting, we parameterize the Active contour without edges (ACWE) framework via a convolutional neural network (ConvNet), and optimize the parameters of the ConvNet using a self-supervised method. In another setting (semi-supervised), the auxiliary segmentation ground truth is used during training. We show that the method provides fast and high-quality bone segmentation in the context of single-photon emission computed tomography (SPECT) image.
    * <img src="/images/UnsupCNNSeg.jpg" width="700"/>
    * *Citation:*
        * *APA:* Chen, J., & Frey, E. C. (2020, January). Medical Image Segmentation via Unsupervised Convolutional Neural Network. In Medical Imaging with Deep Learning.
        * *BibTex:* @inproceedings{chen2020medical,
                    title={Medical Image Segmentation via Unsupervised Convolutional Neural Network},
                    author={Chen, Junyu and Frey, Eric C},
                    booktitle={Medical Imaging with Deep Learning},
                    year={2020}}

3. ***Incorporating CT prior information in the robust fuzzy C-means algorithm for QSPECT image segmentation***
    * *Authors:* **Junyu Chen**, Abhinav K Jha, Eric C. Frey
    * *Published in:* Medical Imaging 2019: Image Processing
    * *Paper link:* [SPIE Digital Library](https://www.spiedigitallibrary.org/conference-proceedings-of-spie/10949/109491W/Incorporating-CT-prior-information-in-the-robust-fuzzy-C-means/10.1117/12.2506805.short)
    * *PDF:* [CT_prior_SPECT_Seg.pdf](http://junyuchen245.github.io/files/109491W.pdf)
    * *Code:* [SPECT-CT-Seg-RFCM](https://github.com/junyuchen245/SPECT-CT-Seg-RFCM)
    * *Description:* We propose and evaluate a fuzzy C-means (FCM) clustering based semi-automatic segmentation method on quantitative Tc-99m MDP quantitative SPECT/CT. We propose to incorporate information from registered CT images, which can be used to segment normal bones quite readily, into the FCM segmentation algorithm. The proposed method modifies the objective function of the robust fuzzy C-means (RFCM) method to include prior information about bone from CT images and spatial information from the SPECT image to allow for simultaneously segmenting lesion and bone in BQSPECT/CT images.
    * <img src="/images/RFCM_Seg.jpg" width="700"/>
    * *Citation:*
        * *APA:* Chen, J., Jha, A. K., & Frey, E. C. (2019, March). Incorporating CT prior information in the robust fuzzy C-means algorithm for QSPECT image segmentation. In Medical Imaging 2019: Image Processing (Vol. 10949, p. 109491W). International Society for Optics and Photonics.
        * *BibTex:* @inproceedings{chen2019incorporating,
                    title={Incorporating CT prior information in the robust fuzzy C-means algorithm for QSPECT image segmentation},
                    author={Chen, Junyu and Jha, Abhinav K and Frey, Eric C},
                    booktitle={Medical Imaging 2019: Image Processing},
                    volume={10949},
                    pages={109491W},
                    year={2019},
                    organization={International Society for Optics and Photonics}
                    }
