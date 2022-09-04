---
title: 'Explaining what learned models predict: In which cases can we trust machine learning models and when is caution required?'
excerpt: 'In many cases, it is difficult to explain how machine learning models predict. Transparency becomes a big issue when it comes to applying models in several real-life areas. Here, we discuss how we can explain a model’s predictions and how people’s trust in the model depends on its explainability. We also try to understand where certain caution is required. AI-based products and services are increasingly prevalent for decision making in a wide range of domains. Machine learning models predict decisions based on patterns from data. When the complexity  
and amount of data grows, it becomes harder to explain those predictions. Without proper explainability of the result, these models may lose trust and credibility, especially when using it in some high-stakes decision-making. In such cases, it is also important to be cautious. Cyber attacks to access confidential data or the unpredictable nature of models may result in unexpected outcomes.'
coverImage: '/assets/blog/explaining-what-learned-models-predict/xai.png'
date: '2022-05-21T05:15:52.322Z'
author:
  name: Burhan Uddin
  picture: '/assets/blog/authors/burhan.jpg'
ogImage:
  url: '/assets/blog/explaining-what-learned-models-predict/xai.png'
tags:
  - Artificial Intelligence
  - Machine Learning
  - Scientific Essay
---
In many cases, it is difficult to explain how machine learning models predict. Transparency becomes a big issue when it comes to applying models in several real-life areas. Here, we discuss how we can explain a model’s predictions and how people’s trust in the model depends on its explainability. We also try to understand where certain caution is required.

AI-based products and services are increasingly prevalent for decision making in a wide range of domains. Machine learning models predict decisions based on patterns from data. When the complexity and amount of data grows, it becomes harder to explain those predictions. Without proper explainability of the result, these models may lose trust and credibility, especially when using it in some high-stakes decision-making. In such cases, it is also important to be cautious. Cyber attacks to access confidential data or the unpredictable nature of models may result in unexpected outcomes.

![](/assets/blog/explaining-what-learned-models-predict/black-box-model.png)

Explaining Model’s Prediction
-----------------------------

It is difficult to explain the decision-making process of black-box models (Figure 1) \[8\]. It acts as a hindrance to use the model. Interpretability of a model helps gain trust and gives easier access to the required insights when something goes wrong. Interpretability is how accurately a model can relate cause to an effect \[9\]. On the other hand, explainability is a way to explain the internal mechanics of the black box neural network in human terms.\[14\] This ability to improve a model based on these insights helps alleviate an untrustworthy situation. \[13\]. There are already some research going on trying to explain and explore the predictions of black-box models\[7\] \[16\]. These interpretable models led to the birth of explanatory artificial intelligence (XAI), where rather than trying to explain a black-box model, it is attempted to make the ML models explainable from the beginning (??) \[4\]. These models are highly interpretable and can explain their own decisions. Transparency of these models also aids in avoiding potential biases in training data \[3\].

![](/assets/blog/explaining-what-learned-models-predict/XAI-concept.png)

Assessing Trust
---------------

Deep learning algorithms, trained on enormous data sets, have already exceeded human performance in some fields. In medical research, the performance of deep learning models had outperformed human specialists when the model was trained with millions of images\[5\]. The result proved that black box models could also achieve on par performance of a human expert.

It was found that both a model’s stated accuracy and observed accuracy impact people’s trust. If the ability to make minor adjustments to the prediction is provided, people are more willing to accept them. Through a sequence of randomized human-subject experiments, another study found that the number of features of a model or its interpretability does not significantly impact people’s trust in that model. However, it does impact people’s ability to identify when the model makes any mistakes\[20\].

Uncertainty occurs when a model tries to predict based on imperfect or incomplete information. It can also impact trust in the model as uncertainty may result in unexpected output. In such cases, proper evaluation of uncertainty is required. To illustrate, in areas like health care or autonomous vehicles\[6\], realistic estimation of uncertainties is vital for credibility of the model \[10\]. Appropriate measurements are required to distinguish between different types of uncertainties to strengthen trust in a model on a specific domain. For example, politics and government uncertainty do not relate to changes in the economy. Nevertheless, business uncertainty can be associated with weakness in the economy\[17\].

![](/assets/blog/explaining-what-learned-models-predict/chain-of-trust.jpg)

In the paper “The relationship between trust in AI and trustworthy machine learning technologies”\[19\], authors found that technology decisions in each stage of machine learning may impact the trust. They described it as the chain of trust (Figure 3) and classified the trustworthiness of technologies in four categories named Fair, Explainable, Auditable, and Safe (FEAS). These categories are required to be considered in various stages of the pipeline to form the chain of trust. This paper also demonstrated ethical considerations behind the design or deployment of AI products impact perception of trust.

Required Cautions
-----------------

**Ensuring data privacy**  
Machine learning models may access a mammoth amount of confidential data for training. So it is a matter of concern what data we are providing to models as input training data. What may happen if the data is inadvertently leaked to an adversary? For example, it has been already proved that it is possible to recover an approximate image of a face used in training a facial recognition algorithm, based only on the individual’s name.\[2\]  

**Black box models on high stake fields**  
Although many black-box models have outperformed humans in some cases\[5\], reliance on them in some high stake decision-making fields like health-care, criminal identification, defense \[4\], autonomous driving should be taken cautiously. Many of these black-box models, such as autonomous cars are vulnerable to cyber attack\[1\]. An AI algorithm combined with its lack of transparency can turn it into a dangerous system. We need to acknowledge that these models are still fallible. Black box models can easily lead to making decisions that make no sense at all. ML systems have already proved to show bias for gender for deciding credit worthiness2 , racism towards black patients\[12\] and criminals 3 . So rather than using black box models that may potentially cause harm for society \[11\], a good practice would be to design and use models that are explainable in the first place.\[15\] On the other side, black-box models often provide higher precision than any highly interpretable models. So there must be a delicate balance between transparency, privacy, and precision while choosing these models for different circumstances.  
  
**Handling uncertainties**  
Proper evaluation of uncertainties is important even in highly interpretable and explainable models as unexpected outcomes can occur. For example, investigation of uncertainty data for autonomous driving is a key safety-related concern\[18\].

![](/assets/blog/explaining-what-learned-models-predict/uncertainty.jpg)

Machine learning is rapidly becoming a ubiquitous tool in our daily life. As the complexity of models and data grows, it is becoming difficult to explain the predictions. Usage of black-box models in high-stakes decision-making fields sometimes raises questions about its transparency. So we can rather try using XAI to gain trust. Machine learning models may use tremendous amounts of confidential data for training purposes. It is required to protect them from unauthorized use. Since machine learning is not a mistake proof system, we must use ML models with utmost sincerity when applying them to high-stakes fields.  
  
AI is quickly developing complex mathematical methods for more advanced fields. With proper interpretability, explainability, and transparency for AI systems, it will gain further trust, like how safety equipment and regulations led to safe commercial flights from experimental flying machines.

Links
-----

1.  https://machinelearningmastery.com/uncertainty-in-machine-learning
2.  https://www.wired.com/story/the-apple-card-didnt-see-genderand-thats-theproblem/
3.  https://www.propublica.org/article/machine-bias-risk-assessments-in-criminalsentencing
4.  https://towardsdatascience.com/the-case-for-mystery-in-machine-learning6719c1eaf5c8

References
----------

1.  Wieland Brendel, Jonas Rauber, and Matthias Bethge. 2018. Decision-Based Adversarial Attacks: Reliable Attacks Against Black-Box Machine Learning Models. arXiv:1712.04248 \[stat.ML\] 
2.  Matt Fredrikson, Somesh Jha, and Thomas Ristenpart. 2015. Model Inversion Attacks That Exploit Confidence Information and Basic Countermeasures. In Proceedings of the 22nd ACM SIGSAC Conference on Computer and Communications Security (Denver, Colorado, USA) (CCS ’15). Association for Computing Machinery, New York, NY, USA, 1322–1333. https://doi.org/10.1145/2810103.2813677 
3.  L. H. Gilpin, D. Bau, B. Z. Yuan, A. Bajwa, M. Specter, and L. Kagal. 2018. Explaining Explanations: An Overview of Interpretability of Machine Learning. In 2018 IEEE 5th International Conference on Data Science and Advanced Analytics (DSAA). 80–89. https://doi.org/10.1109/DSAA.2018.00018 
4.  David Gunning and David Aha. 2019. DARPA’s Explainable Artificial Intelligence (XAI) Program. AI Magazine 40, 2 (Jun. 2019), 44–58. https://doi.org/10.1609/ aimag.v40i2.2850 
5.  K. Holzinger, Klaus Mak, Peter Kieseberg, and Andreas Holzinger. 2018. Can we Trust Machine Learning Results? Artificial Intelligence in Safety-Critical Decision Support. ERCIM News 2018 (2018). 
6.  Michael Kläs and Anna Maria Vollmer. 2018. Uncertainty in Machine Learning Applications: A Practice-Driven Classification of Uncertainty. In Computer Safety, Reliability, and Security, Barbara Gallina, Amund Skavhaug, Erwin Schoitsch, and Friedemann Bitsch (Eds.). Springer International Publishing, Cham, 431–438. 
7.  Himabindu Lakkaraju, Ece Kamar, Rich Caruana, and Jure Leskovec. 2017. Interpretable and Explorable Approximations of Black Box Models. arXiv:1707.01154 \[cs.AI\] 
8.  Yann LeCun, Yoshua Bengio, and Geoffrey Hinton. 2015. Deep learning. Nature 521, 7553 (01 May 2015), 436–444. https://doi.org/10.1038/nature14539 
9.  Christoph Molnar. 2019. Interpretable Machine Learning. https://christophm. github.io/interpretable-ml-book/. 
10.  Félix Musil, Michael J. Willatt, Mikhail A. Langovoy, and Michele Ceriotti. 2019. Fast and Accurate Uncertainty Estimation in Chemical Machine Learning. Journal of Chemical Theory and Computation 15, 2 (2019), 906–915. https://doi.org/10. 1021/acs.jctc.8b00959 arXiv:https://doi.org/10.1021/acs.jctc.8b00959 
11.  Cathy ONeil. 2017. Weapons of math destruction: how big data increases inequality and threatens democracy. Penguin Books. 
12.  Ravi B. Parikh, Stephanie Teeple, and Amol S. Navathe. 2019. Addressing Bias in Artificial Intelligence in Health Care. JAMA 322, 24 (12 2019), 2377–2378. https://doi.org/10.1001/jama.2019.18058 
13.  Marco Túlio Ribeiro, Sameer Singh, and Carlos Guestrin. 2016. “Why Should I Trust You?”: Explaining the Predictions of Any Classifier. CoRR abs/1602.04938 (2016). arXiv:1602.04938 http://arxiv.org/abs/1602.04938
14.  R. Roscher, B. Bohn, M. F. Duarte, and J. Garcke. 2020. Explainable Machine Learning for Scientific Insights and Discoveries. IEEE Access 8 (2020), 42200– 42216. https://doi.org/10.1109/ACCESS.2020.2976199
15.  Cynthia Rudin. 2019. Stop explaining black box machine learning models for high stakes decisions and use interpretable models instead. Nature Machine Intelligence 1, 5 (01 May 2019), 206–215. https://doi.org/10.1038/s42256-019-0048-x 
16.  Cynthia Rudin and Joanna Radin. 2019. Why Are We Using Black Box Models in AI When We Don’t Need To? A Lesson From An Explainable AI Competition. Harvard Data Science Review 1, 2 (22 11 2019). https://doi.org/10.1162/99608f92. 5a8a3a3d https://hdsr.mitpress.mit.edu/pub/f9kuryi8.
17.  Bennett Saltzman and Julieta Yung. 2018. A machine learning approach to identifying different types of uncertainty. Economics Letters 171 (2018), 58–62. https://doi.org/10.1016/j.econlet.2018.07.003 
18.  Sina Shafaei, Stefan Kugele, Mohd Hafeez Osman, and Alois Knoll. 2018. Uncertainty in Machine Learning: A Safety Perspective on Autonomous Driving. In Computer Safety, Reliability, and Security, Barbara Gallina, Amund Skavhaug, Erwin Schoitsch, and Friedemann Bitsch (Eds.). Springer International Publishing, Cham, 458–464.
19.  Ehsan Toreini, Mhairi Aitken, Kovila Coopamootoo, Karen Elliott, Carlos Gonzalez Zelaya, and Aad van Moorsel. 2020. The Relationship between Trust in AI and Trustworthy Machine Learning Technologies. In Proceedings of the 2020 Conference on Fairness, Accountability, and Transparency (Barcelona, Spain) (FAT\* ’20). Association for Computing Machinery, New York, NY, USA, 272–283. https://doi.org/10.1145/3351095.3372834 
20.  Ming Yin, Jennifer Wortman Vaughan, and Hanna Wallach. 2019. Understanding the Effect of Accuracy on Trust in Machine Learning Models. In CHI 2019. ACM. https://www.microsoft.com/en-us/research/publication/understandingthe-effect-of-accuracy-on-trust-in-machine-learning-models/