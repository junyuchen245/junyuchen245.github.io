---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---
1.  ***Targeted Gradient Descent: A Novel Method for Convolutional Neural Networks Fine-tuning and Online-learning***
    * *Authors:* **Junyu Chen**, Evren Asma, and Chung Chan
    * *Published in:* MICCAI, 2021 (*provisionally accepted, top 13% of 1630 papers*)
    * *Paper link:* Coming soon...
    * *PDF:* [<img src="/images/pdf_icon.png" width="25"/>](https://github.com/junyuchen245/junyuchen245.github.io/blob/master/files/TGD_MICCAI_Junyu.pdf)
    * *Code:* *Patent processing.* Not available. 
    * *Description:* A ConvNet is usually trained and then tested using images drawn from the same distribution. To generalize a ConvNet to various tasks often requires a complete training dataset that consists of images drawn from different tasks. In most scenarios, it is nearly impossible to collect every possible representative dataset as a priori. The new data may only become available after the ConvNet is deployed in clinical practice. ConvNet, however, may generate artifacts on out-of-distribution testing samples. In this study, we present Targeted Gradient Descent, a novel fine-tuning method that can extend a pre-trained network to a new task without revisiting data from the previous task while preserving the knowledge acquired from previous training. To a further extent, the proposed method also enables online learning of patient-specific data to enhance the network’s generalization capability in real-world applications.
    * <img src="/images/TGD.jpg" width="700"/>
    * *Citation:* Coming soon... 

2.  ***Learning Fuzzy Clustering for SPECT/CT Segmentation via Convolutional Neural Networks***
    * *Authors:* **Junyu Chen**, Ye Li, Licia P. Luna, Hyun Woo Chung, Steven P. Rowe, Yong Du, Lilja B. Solnes, and Eric C. Frey
    * *Published in:* Medical Physics
    * *Paper link:* [https://aapm.onlinelibrary.wiley.com/doi/10.1002/mp.14903](https://aapm.onlinelibrary.wiley.com/doi/10.1002/mp.14903)
    * *PDF:* [<img src="/images/pdf_icon.png" width="25"/>](https://arxiv.org/pdf/2104.08623.pdf)
    * *Code:* [Semi-supervised_FCM_Loss_for_Segmentation](https://github.com/junyuchen245/Semi-supervised_FCM_Loss_for_Segmentation)
    * *Description:* We present a new unsupervised segmentation loss function and its semi- and supervised variants for training a convolutional neural network (ConvNet). The loss functions were developed based on the objective function of the classical Fuzzy C-means (FCM) algorithm. The first proposed loss function can be computed within the input image itself without any ground truth labels, and is thus unsupervised; the proposed supervised loss function follows the traditional paradigm of the deep learning-based segmentation methods and leverages ground truth labels during training. The last loss function is a combination of the first and the second and includes a weighting parameter, which enables semi-supervised segmentation using deep learning neural network.
    * <img src="/images/overview.jpg" width="600"/>
    * *Citation:* 
         * *APA:* Chen, J., Li, Y., Luna, L.P., Chung, H.W., Rowe, S.P., Du, Y., Solnes, L.B. and Frey, E.C. (2021), Learning Fuzzy Clustering for SPECT/CT Segmentation via Convolutional Neural Networks. <i>Med. Phys.</i>. Accepted Author Manuscript. https://doi.org/10.1002/mp.14903
         * *BibTex:@article{https://doi.org/10.1002/mp.14903,
            author = {Chen, Junyu and Li, Ye and Luna, Licia P. and Chung, Hyun Woo and Rowe, Steven P. and Du, Yong and Solnes, Lilja B. and Frey, Eric C.},
            title = {Learning Fuzzy Clustering for SPECT/CT Segmentation via Convolutional Neural Networks},
            journal = {Medical Physics},
            volume = {n/a},
            number = {n/a},
            pages = {},
            doi = {https://doi.org/10.1002/mp.14903},
            url = {https://aapm.onlinelibrary.wiley.com/doi/abs/10.1002/mp.14903},
            eprint = {https://aapm.onlinelibrary.wiley.com/doi/pdf/10.1002/mp.14903}
            }
    
3. ***ViT-V-Net: Vision Transformer for Unsupervised Volumetric Medical Image Registration***
    * *Authors:* **Junyu Chen**, Yufan He, Eric C. Frey, Ye Li, Yong Du
    * *Published in:* Medical Imaging with Deep Learning, 2021
    * *Paper link:* [https://arxiv.org/abs/2104.06468](https://arxiv.org/abs/2104.06468)
    * *PDF:* [<img src="/images/pdf_icon.png" width="25"/>](https://arxiv.org/pdf/2104.06468.pdf)
    * *Code:* [ViT-V-Net_for_3D_Image_Registration](https://github.com/junyuchen245/ViT-V-Net_for_3D_Image_Registration)
    * *Description:* We present ViT-V-Net that bridges Vision Transformer and V-Net for volumetric medical image registration. The experimental results demonstrate that the proposed architecture achieves superior performance to several state-of-the-art registration methods.
    * <img src="/images/ViT-V-Net.jpg" width="800"/>
    * *Citation:*
         * *APA:* Chen, J., He, Y., Frey, E. C., Li, Y. and Du, Y. (2021), ViT-V-Net: Vision Transformer for Unsupervised Volumetric Medical Image Registration. <i>arXiv preprint</i>
         * *BibTex:*@misc{chen2021vitvnet,
                     title={ViT-V-Net: Vision Transformer for Unsupervised Volumetric Medical Image Registration}, 
                     author={Junyu Chen and Yufan He and Eric C. Frey and Ye Li and Yong Du},
                     year={2021},
                     eprint={2104.06468},
                     archivePrefix={arXiv},
                     primaryClass={eess.IV}
                     }
4.  ***Generating anthropomorphic phantoms using fully unsupervised deformable image registration with convolutional neural networks***
    * *Authors:* **Junyu Chen**, Ye Li, Yong Du, Eric C. Frey
    * *Published in:* Medical Physics, Dec. 2020 (***Editor's Choice***)
    * *Paper link:* [https://aapm.onlinelibrary.wiley.com/doi/abs/10.1002/mp.14545](https://aapm.onlinelibrary.wiley.com/doi/abs/10.1002/mp.14545)
    * *PDF:* [<img src="/images/pdf_icon.png" width="25"/>](http://junyuchen245.github.io/files/Phantoms_2020_MedPhy.pdf)
    * *Code:* [Fully_Unsupervised_CNN_Registration_Keras](https://github.com/junyuchen245/Fully_Unsupervised_CNN_Registration_Keras)
    * *Description:* We treat CNN as an optimization tool that iteratively minimizes the loss function via reparametrization in each iteration. This means that the algorithm is fully unsupervised and thus **no prior training is required**. We generate phantom variations by warpping an XCAT phantom to capture the anatomical variations within the real human CT images.
    * <img src="/images/MedPhy_phantom.jpg" width="1000"/>
    * *Citation:*
        * *APA:* Chen, J., Li, Y., Du, Y. and Frey, E.C. (2020), Generating anthropomorphic phantoms using fully unsupervised deformable image registration with convolutional neural networks. <i>Med. Phys.</i>, 47: 6366-6380. https://doi.org/10.1002/mp.14545
        * *BibTex:* @article{chen2020phantoms,
                    author = {Chen, Junyu and Li, Ye and Du, Yong and Frey, Eric C.},
                    title = {Generating Anthropomorphic Phantoms Using Fully Unsupervised Deformable Image Registration with Convolutional Neural Networks},
                    journal = {Medical Physics},
                    volume = {47},
                    number = {12},
                    pages = {6366-6380},
                    doi = {10.1002/mp.14545},
                    url = {https://aapm.onlinelibrary.wiley.com/doi/abs/10.1002/mp.14545}}
5. ***DeepAMO: A Multi-Slice, Multi-View Anthropomorphic Model Observer for Visual Detection Tasks Performed on Volume Images***
    * *Authors:* Ye Li, **Junyu Chen**, Justin L. Brown, S. Ted Treves, Xinhua Cao, Frederic H. Fahey, George Sgouros, Wesley E. Bolch, Eric C. Frey
    * *Published in:*  Journal of Medical Imaging’s special section: Perspectives in Human and Model Observer Performance, 2020
    * *Paper link:* [SPIE. Digital Library](https://www.spiedigitallibrary.org/journals/journal-of-medical-imaging/volume-8/issue-4/041204/DeepAMO--a-multi-slice-multi-view-anthropomorphic-model-observer/10.1117/1.JMI.8.4.041204.short?SSO=1)
    * *PDF:* [<img src="/images/pdf_icon.png" width="25"/>](http://garyliye.com/DeepAMO.pdf)
    * *Code:* [From GaryLi's site](http://garyliye.com/deepAMO.zip)
    * *Description:* We have developed a deep learning-based anthropomorphic model observer (DeepAMO) for image quality evaluation of multi-orientation, multi-slice image sets with respect to a clinically realistic 3D defect detection task. The input to the DeepAMO is a composite image,
typical of that used to view 3D volumes in clinical practice. The output is a rating value designed to mimic human observer’s defect detection performance. The main
contributions of this paper are threefold. First, we propose a hypothetical model of the decision process of a reader performing a detection task using a 3D volume. Second, we propose a projection-based defect confirmation network architecture to confirm defect present in two different slicing orientations. Third, we propose a novel calibration method that ‘learns’ the underlying distribution of observer ratings from the human observer rating data (thus modeling
inter- or intra- observer variability) using a Mixture Density Network.
    * <img src="/images/DeepAMO_profile_pic.png" width="700"/>
    * *Citation:*
        * *APA:* Li, Y., Chen, J., Brown, J. L., Treves, S. T., Cao, X., Fahey, F. H., Sgouros, G., Bolch, W. E., & Frey, E. C. (2021, January). DeepAMO: a                   multi-slice, multi-view anthropomorphic model observer for visual detection tasks performed on volume images. <i>Journal of Medical                            Imaging</i>, 8(4): 041204. https://doi:10.1117/1.JMI.8.4.041204
        * *BibTex:*  @article{10.1117/1.JMI.8.4.041204,
                     author = {Ye Li and Junyu Chen and Justin L. Brown and S. Ted Treves and Xinhua Cao and Frederic H. Fahey and George Sgouros and Wesley                      E. Bolch and Eric C. Frey},
                     title = {{DeepAMO: a multi-slice, multi-view anthropomorphic model observer for visual detection tasks performed on volume images}},
                     volume = {8},
                     journal = {Journal of Medical Imaging},
                     number = {4},
                     publisher = {SPIE},
                     pages = {1 -- 22},
                     keywords = {model observer, deep learning, task-based image quality assessment},
                     year = {2021},
                     doi = {10.1117/1.JMI.8.4.041204},
                     URL = {https://doi.org/10.1117/1.JMI.8.4.041204}}
   
6. ***Medical Image Segmentation via Unsupervised Convolutional Neural Network***     
    * *Authors:* **Junyu Chen**, Eric C. Frey
    * *Published in:* Medical Imaging with Deep Learning, 2020
    * *Paper link:* [https://openreview.net/forum?id=XrbnSCv4LU](https://openreview.net/forum?id=XrbnSCv4LU)
    * *PDF:* [<img src="/images/pdf_icon.png" width="25"/>](https://openreview.net/pdf?id=XrbnSCv4LU)
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

7. ***Incorporating CT prior information in the robust fuzzy C-means algorithm for QSPECT image segmentation***
    * *Authors:* **Junyu Chen**, Abhinav K Jha, Eric C. Frey
    * *Published in:* Medical Imaging 2019: Image Processing
    * *Paper link:* [SPIE Digital Library](https://www.spiedigitallibrary.org/conference-proceedings-of-spie/10949/109491W/Incorporating-CT-prior-information-in-the-robust-fuzzy-C-means/10.1117/12.2506805.short)
    * *PDF:* [<img src="/images/pdf_icon.png" width="25"/>](http://junyuchen245.github.io/files/109491W.pdf)
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

<br/><br/><br/><br/><br/><br/><br/><br/><br/>
