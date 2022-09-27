---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---
1.  ***Transforming medical imaging with Transformers? A comparative review of key properties, current progresses, and future perspectives.***
    * *Authors:* Jun Li\*, **Junyu Chen**\*, Yucheng Tang\*, Ce Wang, Bennett A. Landman, and S. Kevin Zhou (***\*: Equal Contribution***)
    * *Submitted to:* Medical Image Analysis
    * *Paper link:* [https://arxiv.org/abs/2206.01136](https://arxiv.org/abs/2206.01136)
    * *PDF:* [<img src="/images/pdf_icon.png" width="25"/>](https://arxiv.org/pdf/2206.01136.pdf)
    * *Description:* Transformer, the latest technological advance of deep learning, has gained prevalence in natural language processing or computer vision. Since medical imaging bear some resemblance to computer vision, it is natural to inquire about the status quo of Transformers in medical imaging and ask the question: can the Transformer models transform medical imaging? In this paper, we attempt to make a response to the inquiry. After a brief introduction of the fundamentals of Transformers, especially in comparison with convolutional neural networks (CNNs), and highlighting key defining properties that characterize the Transformers, we offer a comprehensive review of the state-of-the-art Transformer-based approaches for medical imaging and exhibit current research progresses made in the areas of medical image segmentation, recognition, detection, registration, reconstruction, enhancement, etc. 
    * <img src="/images/TransSurvey.jpg" width="800"/>
    * *Citation:*
         * *APA:* Li, J., <strong>Chen, J.</strong>, Tang, Y., Wang, C., Landman, B. A., & Zhou, S. K. (2022). Transforming medical imaging with Transformers?          A comparative review of key properties, current progresses, and future perspectives. arXiv preprint [arXiv:2206.01136](https://arxiv.org/abs/2206.01136).       
         * *BibTex:* @article{li2022transforming,
             title={Transforming medical imaging with Transformers? A comparative review of key properties, current progresses, and future perspectives},
             author={Li, Jun and Chen, Junyu and Tang, Yucheng and Wang, Ce and Landman, Bennett A and Zhou, S Kevin},
             journal={arXiv preprint arXiv:2206.01136},
             year={2022}
            }
2.  ***Unsupervised Learning of Diffeomorphic Image Registration via TransMorph***
    * *Authors:* **Junyu Chen**, Eric C. Frey, and Yong Du
    * *Published in:* International Workshop on Biomedical Image Registration (WBIR), 2022 (*Long oral presentation*)
    * *Paper link:* [https://openreview.net/forum?id=uwIo__2xnTO](https://openreview.net/forum?id=uwIo__2xnTO)
    * *PDF:* [<img src="/images/pdf_icon.png" width="25"/>](https://openreview.net/pdf?id=uwIo__2xnTO)
    * *Code:* [TransMorph-TVF](https://github.com/junyuchen245/TransMorph_TVF) 
    * *Description:*  In this work, we propose a learning-based framework for unsupervised and end-to-end learning of diffeomorphic image registration. Specifically, the proposed network learns to produce and integrate timedependent velocity fields in an LDDMM setting. The proposed method guarantees a diffeomorphic transformation and allows the transformation to be easily and accurately inverted. We also showed that, without explicitly imposing a diffeomorphism, the proposed network can provide a significant performance gain while preserving the spatial smoothness in the deformation. The proposed method outperforms the state-of-theart registration methods on two widely used publicly available datasets, indicating its effectiveness for image registration. 
    * <img src="/images/forward_inverse.jpg" width="700"/>
    * *Citation:*
         * *APA:* Chen, J., Frey, E. C., & Du, Y. (2022). Unsupervised Learning of Diffeomorphic Image Registration via TransMorph. In: <i>International Workshop on Biomedical Image Registration</i>. Springer, Cham.
         * *BibTex:*@inproceedings{chen2022diffeomorphic,
                     title={Unsupervised Learning of Diffeomorphic Image Registration via TransMorph},
                     author={Junyu Chen and Eric C. Frey and Yong Du},
                     booktitle={International Workshop on Biomedical Image Registration},
                     year={2022},
                     organization={Springer}
                     }
3.  ***TransMorph: Transformer for Unsupervised Medical Image Registration***
    * *Authors:* **Junyu Chen**, Yong Du, Yufan He, William P. Segars, Ye Li, and Eric C. Frey
    * *Published in:* Medical Image Analysis
    * *Paper link:* [https://www.sciencedirect.com/science/article/pii/S1361841522002432](https://www.sciencedirect.com/science/article/pii/S1361841522002432)
    * *PDF:* [<img src="/images/pdf_icon.png" width="25"/>](https://arxiv.org/pdf/2111.10480.pdf)
    * *Code:* [TransMorph](https://github.com/junyuchen245/TransMorph_Transformer_for_Medical_Image_Registration) 
    * *Description:* Transformers may be a strong candidate for image registration because their self-attention mechanism enables a more precise comprehension of
the spatial correspondence between moving and fixed images. In this paper, we present TransMorph, a hybrid Transformer-ConvNet model for volumetric medical image registration.
We also introduce three variants of TransMorph, with two diffeomorphic variants ensuring the topology-preserving deformations and a Bayesian variant producing a well-calibrated registration uncertainty estimate.
    * <img src="/images/TransMorph.jpg" width="700"/>
    * *Citation:*
         * *APA:* Chen, J., Frey, E. C., He, Y., Segars, W. P., Li, Y., & Du, Y. (2022). Transmorph: Transformer for unsupervised medical image registration. *Medical Image Analysis*, 102615.
         * *BibTex:*@article{CHEN2022102615,
                     title = {TransMorph: Transformer for unsupervised medical image registration},
                     journal = {Medical Image Analysis},
                     volume = {82},
                     pages = {102615},
                     year = {2022},
                     issn = {1361-8415},
                     doi = {https://doi.org/10.1016/j.media.2022.102615},
                     }
4.  ***A Noise-level-aware Framework for PET Image Denoising***
    * *Authors:* Ye Li, Jianan Cui, **Junyu Chen**, Guodong Zeng, Scott Wollenweber, Floris Jansen, Se-In Jang, Kyungsang Kim, Kuang Gong, Quanzheng Li
    * *Paper link:* [https://arxiv.org/abs/2203.08034](https://arxiv.org/abs/2203.08034)
    * *PDF:* [<img src="/images/pdf_icon.png" width="25"/>](https://arxiv.org/ftp/arxiv/papers/2203/2203.08034.pdf)
    * *Description:* In PET, the amount of relative (signal-dependent) noise present in different body regions can be significantly different and is inherently related to the number of counts present in that region. The number of counts in a region depends, in principle and among other factors, on the total administered activity, scanner sensitivity, image acquisition duration, radiopharmaceutical tracer uptake in the region, and patient local body morphometry surrounding the region. In theory, less amount of denoising operations is needed to denoise a high-count (low relative noise) image than images a low-count (high relative noise) image, and vice versa. The current deep-learning-based methods for PET image denoising are predominantly trained on image appearance only and have no special treatment for images of different noise levels. Our hypothesis is that by explicitly providing the local relative noise level of the input image to a deep convolutional neural network (DCNN), the DCNN can outperform itself trained on image appearance only. To this end, we propose a noise-level-aware framework denoising framework that allows embedding of local noise level into a DCNN.
    * <img src="/images/NoiseLVLAware.jpg" width="700"/>
    * *Citation:*
         * *APA:* Li, Y., Cui, J., Chen, J., Zeng, G., Wollenweber, S., Jansen, F., ... & Li, Q. (2022). A Noise-level-aware Framework for PET Image Denoising. arXiv preprint arXiv:2203.08034.
         * *BibTex:@article{li2022noise,
            title={A Noise-level-aware Framework for PET Image Denoising},
            author={Li, Ye and Cui, Jianan and Chen, Junyu and Zeng, Guodong and Wollenweber, Scott and Jansen, Floris and Jang, Se-In and Kim, Kyungsang and Gong, Kuang and Li, Quanzheng},
            journal={arXiv preprint arXiv:2203.08034},
            year={2022}
            }
5.  ***Targeted Gradient Descent: A Novel Method for Convolutional Neural Networks Fine-tuning and Online-learning***
    * *Authors:* **Junyu Chen**, Evren Asma, and Chung Chan
    * *Published in:* MICCAI, 2021 (*Oral presentation*)(*provisionally accepted, top 13% of 1630 papers*)
    * *Paper link:* [https://link.springer.com/chapter/10.1007/978-3-030-87199-4_3](https://link.springer.com/chapter/10.1007/978-3-030-87199-4_3)
    * *PDF:* [<img src="/images/pdf_icon.png" width="25"/>](http://junyuchen245.github.io/files/paper1012.pdf)
    * *Supplementary file:* [<img src="/images/pdf_icon.png" width="25"/>](http://junyuchen245.github.io/files/paper1012_suppl_file.pdf)
    * *Code:* *Patent processing.* Not available. 
    * *Description:* A ConvNet is usually trained and then tested using images drawn from the same distribution. To generalize a ConvNet to various tasks often requires a complete training dataset that consists of images drawn from different tasks. In most scenarios, it is nearly impossible to collect every possible representative dataset as a priori. The new data may only become available after the ConvNet is deployed in clinical practice. ConvNet, however, may generate artifacts on out-of-distribution testing samples. In this study, we present Targeted Gradient Descent, a novel fine-tuning method that can extend a pre-trained network to a new task without revisiting data from the previous task while preserving the knowledge acquired from previous training. To a further extent, the proposed method also enables online learning of patient-specific data to enhance the network’s generalization capability in real-world applications.
    * <img src="/images/TGD.jpg" width="700"/>
    * *Citation:*
         * *APA:* Chen, J., Asma, E., Chan, C. (2021), Targeted Gradient Descent: A Novel Method for Convolutional Neural Networks Fine-Tuning and Online-Learning.  In: <i>Medical Image Computing and Computer Assisted Intervention – MICCAI 2021</i>. Springer. pp. 25–35. https://doi.org/10.1007/978-3-030-87199-4_3
         * *BibTex:@InProceedings{10.1007/978-3-030-87199-4_3,
            author="Chen, Junyu and Asma, Evren and Chan, Chung",
            title="Targeted Gradient Descent: A Novel Method for Convolutional Neural Networks Fine-Tuning and Online-Learning",
            booktitle="Medical Image Computing and Computer Assisted Intervention -- MICCAI 2021",
            year="2021",
            publisher="Springer International Publishing",
            address="Cham",
            pages="25--35",
            isbn="978-3-030-87199-4"
            }

6.  ***Learning Fuzzy Clustering for SPECT/CT Segmentation via Convolutional Neural Networks***
    * *Authors:* **Junyu Chen**, Ye Li, Licia P. Luna, Hyun Woo Chung, Steven P. Rowe, Yong Du, Lilja B. Solnes, and Eric C. Frey
    * *Published in:* Medical Physics
    * *Paper link:* [https://aapm.onlinelibrary.wiley.com/doi/10.1002/mp.14903](https://aapm.onlinelibrary.wiley.com/doi/10.1002/mp.14903)
    * *PDF:* [<img src="/images/pdf_icon.png" width="25"/>](https://aapm.onlinelibrary.wiley.com/doi/epdf/10.1002/mp.14903)
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
    
7. ***ViT-V-Net: Vision Transformer for Unsupervised Volumetric Medical Image Registration***
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
8.  ***Generating anthropomorphic phantoms using fully unsupervised deformable image registration with convolutional neural networks***
    * *Authors:* **Junyu Chen**, Ye Li, Yong Du, Eric C. Frey
    * *Published in:* Medical Physics, Dec. 2020 (***Editor's Choice***)
    * *Paper link:* [https://aapm.onlinelibrary.wiley.com/doi/abs/10.1002/mp.14545](https://aapm.onlinelibrary.wiley.com/doi/abs/10.1002/mp.14545)
    * *PDF:* [<img src="/images/pdf_icon.png" width="25"/>](https://aapm.onlinelibrary.wiley.com/doi/epdf/10.1002/mp.14545)
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
9. ***DeepAMO: A Multi-Slice, Multi-View Anthropomorphic Model Observer for Visual Detection Tasks Performed on Volume Images***
    * *Authors:* Ye Li, **Junyu Chen**, Justin L. Brown, S. Ted Treves, Xinhua Cao, Frederic H. Fahey, George Sgouros, Wesley E. Bolch, Eric C. Frey
    * *Published in:*  Journal of Medical Imaging’s special section: Perspectives in Human and Model Observer Performance, 2020
    * *Paper link:* [SPIE. Digital Library](https://www.spiedigitallibrary.org/journals/journal-of-medical-imaging/volume-8/issue-4/041204/DeepAMO--a-multi-slice-multi-view-anthropomorphic-model-observer/10.1117/1.JMI.8.4.041204.short?SSO=1)
    * *PDF:* [<img src="/images/pdf_icon.png" width="25"/>](http://junyuchen245.github.io/files/041204_1.pdf)
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
   
10. ***Medical Image Segmentation via Unsupervised Convolutional Neural Network***     
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

11. ***Incorporating CT prior information in the robust fuzzy C-means algorithm for QSPECT image segmentation***
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
