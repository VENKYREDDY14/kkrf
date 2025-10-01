<?php
/**
 * Template Name: ARVR Development page
 * Description: Displays the AR/VR Development logo using a template.
 */

get_header(); ?>

<!-- hero section -->
    <section class="hero-section" style="height: 10vh; background-image: url('<?php echo get_template_directory_uri(); ?>/assets/ai/arvr.jpg'); background-size: cover; background-position: center;">
        <div class="hero-overlay"></div>
        <div class="erp-container text-center d-flex flex-column justify-content-center align-items-center vh-100 hero-content">
            
            <h1 class="heading">AR/VR Development</h1>
            <p class="subheading">Chasing new frontiers of customer engagement with Mobile App Development</p>
        </div>
    </section>

    <!-- KEY VALUES -->
    <section class="luxoft_expertise_section">
      <h1 class="luxoft_expertise_title">KKRF's Expertise In 3D AR/VR App Development</h1>
      
      <div class="luxoft_expertise_stats_container">
          <div class="luxoft_expertise_stat_item">
              <h2 class="luxoft_expertise_number">20+</h2>
              <p class="luxoft_expertise_text">years of experience as an AR/VR development company</p>
          </div>
          
          <div class="luxoft_expertise_stat_item">
              <h2 class="luxoft_expertise_number">30+</h2>
              <p class="luxoft_expertise_text">major airlines using our 3D solutions for pilot and mechanic training</p>
          </div>
          
          <div class="luxoft_expertise_stat_item">
              <h2 class="luxoft_expertise_number">30+</h2>
              <p class="luxoft_expertise_text">desktop and mobile XR applications delivered</p>
          </div>
      </div>
      
      <h2 class="luxoft_keypoints_title">Key points</h2>
      <div class="luxoft_tech_container">
          <div class="luxoft_tech_column">
              <div class="luxoft_tech_icon">
                  <i class="bi bi-gear-wide-connected"></i>
              </div>
              <h3 class="luxoft_tech_title">Technologies</h3>
              <ul class="luxoft_tech_list">
                  <li>Unity</li>
                  <li>MRTK</li>
                  <li>C#</li>
                  <li>C++</li>
              </ul>
          </div>
          
          <div class="luxoft_tech_column">
              <div class="luxoft_tech_icon">
                  <i class="bi bi-box"></i>
              </div>
              <h3 class="luxoft_tech_title">SDKs</h3>
              <ul class="luxoft_tech_list">
                  <li>Unity VR</li>
                  <li>Open XR</li>
                  <li>Steam VR</li>
                  <li>Oculus VR</li>
              </ul>
          </div>
          
          <div class="luxoft_tech_column">
              <div class="luxoft_tech_icon">
                  <i class="bi bi-display"></i>
              </div>
              <h3 class="luxoft_tech_title">Hardware</h3>
              <ul class="luxoft_tech_list">
                  <li>HTC Vive and Index</li>
                  <li>Google Cardboard</li>
                  <li>Android</li>
                  <li>iOS</li>
                  <li>HoloLens</li>
                  <li>Oculus</li>
              </ul>
          </div>
      </div>
  </section>


  <!-- arvr -->
   
  <section>
    <div class="arvr-custom-body bg-[#000] text-white ">
        <div class="container flex flex-wrap gap-10 py-5">
            <div class="arvr-row-content col-12 col-lg-5 mr-lg-6 mr-xl-6">
                <div>
                    <h5 class="arvr-custom-heading mb-6">Our AR VR Technology Expertise</h5>
                    <p class="arvr-custom-paragraph">Being an esteemed augmented reality app development company, we trust these tools and platforms to build successful AR and VR applications that offer exceptional experiences to users.</p>
                </div>
                
            </div>
            <div class="d-flex flex-column justify-content-center mb-4 col-12 col-lg-6">
                <div class="d-flex flex-row justify-content-center align-items-center mb-5">

                <button id="arTab" class="btn arvr-custom-active-tab me-2" onclick="switchTab('ar')">AR</button>
                <button id="vrTab" class="btn arvr-custom-inactive-tab" onclick="switchTab('vr')">VR</button>
            </div>
                <div>
                    <div id="arContent" class="row justify-content-start text-white">
                        <div class="col-md-3 col-sm-6 mb-3">
                            <div class="p-3 arvr-custom-border bg-dark text-center">ARTOOLKIT</div>
                        </div>
                        <div class="col-md-3 col-sm-6 mb-3">
                            <div class="p-3 arvr-custom-border bg-dark text-center">GOOGLE-ARCORE</div>
                        </div>
                        <div class="col-md-3 col-sm-6 mb-3">
                            <div class="p-3 arvr-custom-border bg-dark text-center">APPLE ARKIT</div>
                        </div>
                        <div class="col-md-3 col-sm-6 mb-3">
                            <div class="p-3 arvr-custom-border bg-dark text-center">VUFORIA</div>
                        </div>
                        <div class="col-md-3 col-sm-6 mb-3">
                            <div class="p-3 arvr-custom-border bg-dark text-center">KUDAN</div>
                        </div>
                        <div class="col-md-3 col-sm-6 mb-3">
                            <div class="p-3 arvr-custom-border bg-dark text-center">MAXST</div>
                        </div>
                        <div class="col-md-3 col-sm-6 mb-3">
                            <div class="p-3 arvr-custom-border bg-dark text-center">DEEPAR</div>
                        </div>
                        <div class="col-md-3 col-sm-6 mb-3">
                            <div class="p-3 arvr-custom-border bg-dark text-center">WIKITUDE</div>
                        </div>
                    </div>
            
                    <div id="vrContent" class="row justify-content-start d-none text-white">
                        <div class="col-md-3 col-sm-6 mb-3">
                            <div class="p-3 arvr-custom-border bg-dark text-center">UNITY 3D</div>
                        </div>
                        <div class="col-md-3 col-sm-6 mb-3">
                            <div class="p-3 arvr-custom-border bg-dark text-center">LIBGDX</div>
                        </div>
                        <div class="col-md-3 col-sm-6 mb-3">
                            <div class="p-3 arvr-custom-border bg-dark text-center">BLENDER</div>
                        </div>
                        <div class="col-md-3 col-sm-6 mb-3">
                            <div class="p-3 arvr-custom-border bg-dark text-center">CRY ENGINE</div>
                        </div>
                        <div class="col-md-3 col-sm-6 mb-3">
                            <div class="p-3 arvr-custom-border bg-dark text-center">TILT BRUSH</div>
                        </div>
                        <div class="col-md-3 col-sm-6 mb-3">
                            <div class="p-3 arvr-custom-border bg-dark text-center">APPGAMEKIT VR</div>
                        </div>
                        <div class="col-md-3 col-sm-6 mb-3">
                            <div class="p-3 arvr-custom-border bg-dark text-center">UNREAL ENGINE</div>
                        </div>
                        <div class="col-md-3 col-sm-6 mb-3">
                            <div class="p-3 arvr-custom-border bg-dark text-center">GOOGLE SKETCH UP</div>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
    
        </div>
    
    
    </div>
  </section>


     <!-- consulting section -->
     <section class="software-section  d-none d-md-block">
        <div class="crm-software-con">
            <div class="sofware-spacing">
                <h5 class="heading">Enhance Business Proficiency Using Our High-End Custom AR/VR Development Services</h5>
                <p class="crm-Software-text">From healthcare and finance to retail and real estate, our custom AR/VR application development services
                  help build immersive solutions for innovative brands.</p>
            </div>
    
            <div class="services-container">
              <div class="services-nav">
                  <div class="service-item active" data-service="consulting">
                      <span class="number">01.</span>
                      AR/VR Consulting
                  </div>
                  <div class="service-item" data-service="migration">
                      <span class="number">02.</span>
                      AR/VR App Development
                  </div>
                  <div class="service-item" data-service="design">
                      <span class="number">03.</span>
                      AR/VR Wearable Integration
                  </div>
                  <div class="service-item" data-service="integration">
                      <span class="number">04.</span>
                      AR/VR Testing and Maintenance
                  </div>
                  <div class="service-item" data-service="development">
                      <span class="number">05.</span>
                      AR/VR with AI
                  </div>
                  <div class="service-item" data-service="implementation">
                      <span class="number">06.</span>
                      Industrial AR/VR
                  </div>
                  <div class="service-item" data-service="mobile">
                      <span class="number">07.</span>
                      Medical AR/VR
                  </div>
                
              </div>
            
              <div class="service-content" id="consulting">
                  <div class="service-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="white" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14h-2v-2h2v2zm0-4h-2V7h2v5zm4 4h-2v-2h2v2zm0-4h-2V7h2v5z"></path></svg>
                  </div>
                  <h2 class="service-title">AR/VR Consulting</h2>
                  <p class="service-description">
                    As a leading Augmented and Virtual Reality development company, we ensure that you get professional and sound advice on building AR/VR applications and exploring the potential of immersive technologies through our experienced AR/VR consultants.
               
                  </p>
              </div>
            
              <div class="service-content hidden" id="migration">
                  <div class="service-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="white" d="M20 10v4h-6v6h-4v-6H4v-4h6V4h4v6h6z"></path></svg>
                  </div>
                  <h2 class="service-title">AR/VR App Development</h2>
                  <p class="service-description">
                      Our expert team creates cutting-edge AR/VR applications tailored to your specific business needs. We design scalable, immersive, and intuitive solutions that create engaging experiences, collect meaningful data, and provide actionable insights to transform your operations and customer interactions.
                
                    </p>
              </div>
            
              <div class="service-content hidden" id="design">
                  <div class="service-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="white" d="M3 3h18v18H3z"></path></svg>
                  </div>
                  <h2 class="service-title">AR/VR Wearable Integration</h2>
                  <p class="service-description">
                      We specialize in creating seamless connections between wearable devices and AR/VR ecosystems. Our solutions enable real-time data synchronization, optimized performance, and enhanced user experiences across health monitoring, industrial training, and smart accessory applications.
                  
                    </p>
              </div>
            
              <div class="service-content hidden" id="integration">
                  <div class="service-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="white" d="M19 6h-2V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-4-2h-4V4h4v2zm-6 0H7V4h4v2zm10 14H5V10h14v8z"></path></svg>
                  </div>
                  <h2 class="service-title">AR/VR Testing and Maintenance</h2>
                  <p class="service-description">
                      Our comprehensive AR/VR testing and maintenance services ensure your immersive systems perform optimally at all times. We provide rigorous user experience testing, performance optimization, compatibility assessment, and continuous monitoring to prevent issues and maintain operational excellence.
                  
                    </p>
              </div>
            
              <div class="service-content hidden" id="development">
                  <div class="service-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="white" d="M10 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2h12c1.1 0 1.99-.9 1.99-2V4c0-1.1-.89-2-1.99-2h-4l-2-2H8L6 2zm0 2h8v16H6V4h4V2z"></path></svg>
                  </div>
                  <h2 class="service-title">AR/VR with AI</h2>
                  <p class="service-description">
                      Our AI-powered AR/VR solutions combine the power of artificial intelligence with immersive technologies to create intelligent systems that learn, adapt, and optimize automatically. We develop smart applications that analyze user behavior, make autonomous decisions, and deliver personalized experiences that transform how businesses operate and serve their customers.
                  
                    </p>
              </div>
            
              <div class="service-content hidden" id="implementation">
                  <div class="service-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="white" d="M3 3h18v18H3z"></path></svg>
                  </div>
                  <h2 class="service-title">Industrial AR/VR</h2>
                  <p class="service-description">
                      Our Industrial AR/VR solutions revolutionize manufacturing and industrial processes through immersive training, remote assistance, and advanced visualization. We deliver robust platforms for maintenance guidance, equipment simulation, production optimization, and supply chain visualization that increase efficiency, reduce downtime, and drive significant cost savings.
                  
                    </p>
              </div>
            
              <div class="service-content hidden" id="mobile">
                  <div class="service-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="white" d="M6 8h12v2H6z"></path></svg>
                  </div>
                  <h2 class="service-title">Medical AR/VR</h2>
                  <p class="service-description">
                    Our Medical AR/VR development services revolutionize healthcare by integrating immersive technologies and advanced analytics, enabling surgical training, patient education, therapeutic applications, and facilitating data-driven decision-making for better patient outcomes. As a top-rated healthcare application development company, we build robust AR/VR solutions through which healthcare providers can deliver personalized care, optimize resource utilization, and enhance overall operational efficiency.
                   
                  </p>
              </div>
            
             
            </div>
        </div>
    </section>
  
    <div class="iot-smart-faq">
      <div class="faq-headline">
          <h3 class="heading">Enhance Business Proficiency Using Our High-End Custom AR/VR Development Services</h3>
          <span>From healthcare and finance to retail and real estate, our custom AR/VR application development services
            help build immersive solutions for innovative brands.</span>
      </div>
      
      <div class="faq-category">
         
          
          
  
          <div class="faq-hexagon">
            <div class="hexagon-wrapper">
                <div class="hexagon-header">
                    <div class="hexagon-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <div class="hexagon-question">
                      AR/VR Consulting
                        <span class="hexagon-toggle">+</span>
                    </div>
                </div>
                <div class="hexagon-content">
                    <div class="hexagon-answer">
                      As a leading Augmented and Virtual Reality development company, we ensure that you get professional and sound advice on building AR/VR applications and exploring the potential of immersive technologies through our experienced AR/VR consultants.
             
                      </div>
                </div>
            </div>
        </div>
        
        <div class="faq-hexagon">
            <div class="hexagon-wrapper">
                <div class="hexagon-header">
                    <div class="hexagon-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    </div>
                    <div class="hexagon-question">
                      AR/VR App Development
                        <span class="hexagon-toggle">+</span>
                    </div>
                </div>
                <div class="hexagon-content">
                    <div class="hexagon-answer">
                      Our expert team creates cutting-edge AR/VR applications tailored to your specific business needs. We design scalable, immersive, and intuitive solutions that create engaging experiences, collect meaningful data, and provide actionable insights to transform your operations and customer interactions.
              
                      </div>
                </div>
            </div>
        </div>
  
        <div class="faq-hexagon">
          <div class="hexagon-wrapper">
              <div class="hexagon-header">
                  <div class="hexagon-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                  </div>
                  <div class="hexagon-question">
                    AR/VR Wearable Integration
                      <span class="hexagon-toggle">+</span>
                  </div>
              </div>
              <div class="hexagon-content">
                  <div class="hexagon-answer">
                    We specialize in creating seamless connections between wearable devices and AR/VR ecosystems. Our solutions enable real-time data synchronization, optimized performance, and enhanced user experiences across health monitoring, industrial training, and smart accessory applications.
           
                    </div>
              </div>
          </div>
      </div>
      
      <div class="faq-hexagon">
          <div class="hexagon-wrapper">
              <div class="hexagon-header">
                  <div class="hexagon-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                  </div>
                  <div class="hexagon-question">
                    AR/VR with AI
                      <span class="hexagon-toggle">+</span>
                  </div>
              </div>
              <div class="hexagon-content">
                  <div class="hexagon-answer">
                    Our AI-powered AR/VR solutions combine the power of artificial intelligence with immersive technologies to create intelligent systems that learn, adapt, and optimize automatically. We develop smart applications that analyze user behavior, make autonomous decisions, and deliver personalized experiences that transform how businesses operate and serve their customers.
                  
                    </div>
              </div>
          </div>
      </div>
  
      <div class="faq-hexagon">
        <div class="hexagon-wrapper">
            <div class="hexagon-header">
                <div class="hexagon-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                </div>
                <div class="hexagon-question">
                  Industrial AR/VR
                    <span class="hexagon-toggle">+</span>
                </div>
            </div>
            <div class="hexagon-content">
                <div class="hexagon-answer">
                  Our Industrial AR/VR solutions revolutionize manufacturing and industrial processes through immersive training, remote assistance, and advanced visualization. We deliver robust platforms for maintenance guidance, equipment simulation, production optimization, and supply chain visualization that increase efficiency, reduce downtime, and drive significant cost savings.
                  
                  </div>
            </div>
        </div>
    </div>
  
    <div class="faq-hexagon">
      <div class="hexagon-wrapper">
          <div class="hexagon-header">
              <div class="hexagon-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
              </div>
              <div class="hexagon-question">
                Medical AR/VR
                  <span class="hexagon-toggle">+</span>
              </div>
          </div>
          <div class="hexagon-content">
              <div class="hexagon-answer">
                Our Medical AR/VR development services revolutionize healthcare by integrating immersive technologies and advanced analytics, enabling surgical training, patient education, therapeutic applications, and facilitating data-driven decision-making for better patient outcomes. As a top-rated healthcare application development company, we build robust AR/VR solutions through which healthcare providers can deliver personalized care, optimize resource utilization, and enhance overall operational efficiency.
                   
                </div>
          </div>
      </div>
  </div>
  
      </div>
  </div>



      <!-- sats section -->
      <div class="container-fluid arvrtech_services_outer_container">
        <div class="row">
            <div class="col-12">
                <h1 class="heading">Development Services</h1>
                <p class="arvrtech_intro_paragraph">
                    As a leading AR app development company, we assist startups and enterprises across various industries leverage our AR/VR development services to drive digital transformation, enhance business growth, and maximize ROI.
                </p>
            </div>
        </div>
        
        <div class="row arvrtech_cards_horizontal_row">
            <!-- Healthcare -->
            <div class="col-lg-3 col-md-6 col-sm-12 arvrtech_card_outer_wrapper">
                <div class="arvrtech_industry_content_card">
                    <div class="arvrtech_icon_circle_container">
                        <i class="bi bi-heart-fill arvrtech_feature_icon_element"></i>
                    </div>
                    <h3 class="arvrtech_card_header_text">Healthcare</h3>
                    <p class="arvrtech_card_description_text">
                        Enhance training, diagnostics, and patient engagement with immersive AR/VR simulations. Elevate procedural accuracy and personalized treatment experiences.
                    </p>
                </div>
            </div>
            
            <!-- Finance -->
            <div class="col-lg-3 col-md-6 col-sm-12 arvrtech_card_outer_wrapper">
                <div class="arvrtech_industry_content_card">
                    <div class="arvrtech_icon_circle_container">
                        <i class="bi bi-arrow-repeat arvrtech_feature_icon_element"></i>
                    </div>
                    <h3 class="arvrtech_card_header_text">Finance</h3>
                    <p class="arvrtech_card_description_text">
                        Streamline complex financial products and data visualization through AR/VR-driven insights. Empower user decision-making and boost customer trust.
                    </p>
                </div>
            </div>
            
            <!-- Restaurant -->
            <div class="col-lg-3 col-md-6 col-sm-12 arvrtech_card_outer_wrapper">
                <div class="arvrtech_industry_content_card">
                    <div class="arvrtech_icon_circle_container">
                        <i class="bi bi-bell-fill arvrtech_feature_icon_element"></i>
                    </div>
                    <h3 class="arvrtech_card_header_text">Restaurant</h3>
                    <p class="arvrtech_card_description_text">
                        Transform dining with AR/VR menus, staff training, and virtual storytelling. Elevate customer satisfaction and operational efficiency.
                    </p>
                </div>
            </div>
            
            <!-- eCommerce -->
            <div class="col-lg-3 col-md-6 col-sm-12 arvrtech_card_outer_wrapper">
                <div class="arvrtech_industry_content_card">
                    <div class="arvrtech_icon_circle_container">
                        <i class="bi bi-cart-fill arvrtech_feature_icon_element"></i>
                    </div>
                    <h3 class="arvrtech_card_header_text">eCommerce</h3>
                    <p class="arvrtech_card_description_text">
                        Offer virtual product try-ons and 360° store experiences with AR/VR. Boost customer confidence, reduce returns, and drive conversions.
                    </p>
                </div>
            </div>
        </div>
        
        <div class="row arvrtech_cards_horizontal_row">
            <!-- Logistics -->
            <div class="col-lg-3 col-md-6 col-sm-12 arvrtech_card_outer_wrapper">
                <div class="arvrtech_industry_content_card">
                    <div class="arvrtech_icon_circle_container">
                        <i class="bi bi-box-seam arvrtech_feature_icon_element"></i>
                    </div>
                    <h3 class="arvrtech_card_header_text">Logistics</h3>
                    <p class="arvrtech_card_description_text">
                        Optimize warehouse operations, driver training, and route planning through immersive AR/VR solutions. Enhance efficiency and reduce operational costs.
                    </p>
                </div>
            </div>
            
            <!-- Social Media -->
            <div class="col-lg-3 col-md-6 col-sm-12 arvrtech_card_outer_wrapper">
                <div class="arvrtech_industry_content_card">
                    <div class="arvrtech_icon_circle_container">
                        <i class="bi bi-chat-fill arvrtech_feature_icon_element"></i>
                    </div>
                    <h3 class="arvrtech_card_header_text">Social Media</h3>
                    <p class="arvrtech_card_description_text">
                        Enable interactive, real-time virtual meetups and shared experiences via AR/VR. Foster deeper user engagement and innovative social connections.
                    </p>
                </div>
            </div>
            
            <!-- Games -->
            <div class="col-lg-3 col-md-6 col-sm-12 arvrtech_card_outer_wrapper">
                <div class="arvrtech_industry_content_card">
                    <div class="arvrtech_icon_circle_container">
                        <i class="bi bi-controller arvrtech_feature_icon_element"></i>
                    </div>
                    <h3 class="arvrtech_card_header_text">Games</h3>
                    <p class="arvrtech_card_description_text">
                        Create captivating AR/VR gaming worlds for heightened realism and engagement. Unlock new levels of immersion and replay value.
                    </p>
                </div>
            </div>
            
            <!-- Entertainment -->
            <div class="col-lg-3 col-md-6 col-sm-12 arvrtech_card_outer_wrapper">
                <div class="arvrtech_industry_content_card">
                    <div class="arvrtech_icon_circle_container">
                        <i class="bi bi-tv arvrtech_feature_icon_element"></i>
                    </div>
                    <h3 class="arvrtech_card_header_text">Entertainment</h3>
                    <p class="arvrtech_card_description_text">
                        Enrich shows, films, and live events with immersive AR/VR features. Offer interactive storytelling and heightened audience engagement.
                    </p>
                </div>
            </div>
        </div>
    </div>


    
    <section class="arvr_hero_outer_container">
      <div class="container-fluid">
          <div class="arvr_hero_inner_wrapper">
          <div class="arvr_hero_image_container">
              <img src="<?php echo get_template_directory_uri(); ?>/assets/ai/arversub.webp" alt="VR user interacting with 3D machine model" class="arvr_hero_image">
          </div>
          <div class="arvr_hero_content_container">
              <h1 class="arvr_hero_heading">Redefine your industry with a next-generation interactive XR solution</h1>
              <a href="#contact" class="arvr_hero_button">
                  GET IN TOUCH
                  <i class="bi bi-arrow-right arvr_hero_button_icon"></i>
              </a>
          </div>
          </div>
      </div>
  </section>   

      <!-- trusted-section -->

      <section class="trusted-section">
        <p class="trusted-text">Trusted by conglomerates, enterprises, and startups alike</p>
    
        <!-- Desktop View -->
        <div class="desktop-logos">
            <img src="<?php echo get_template_directory_uri(); ?>/assets/kfc.jpg" alt="KFC">
            <img src="<?php echo get_template_directory_uri(); ?>/assets/kmpc.jpg" alt="KPMG">
            <img src="<?php echo get_template_directory_uri(); ?>/assets/dominos.png" alt="Domino's">
        <img src="<?php echo get_template_directory_uri(); ?>/assets/google.png" alt="Google">
        <img src="<?php echo get_template_directory_uri(); ?>/assets/bcg.png" alt="BCG">
         
        </div>
    
        <!-- Mobile View (Carousel) -->
        <div class="swiper-container mobile-carousel">
          <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="<?php echo get_template_directory_uri(); ?>/assets/kfc.jpg" alt="KFC"></div>
            <div class="swiper-slide"><img src="<?php echo get_template_directory_uri(); ?>/assets/kmpc.jpg" alt="KPMG"></div>
            <div class="swiper-slide"><img src="<?php echo get_template_directory_uri(); ?>/assets/dominos.png" alt="Domino's"></div>
            <div class="swiper-slide"><img src="<?php echo get_template_directory_uri(); ?>/assets/google.png" alt="Google"></div>
            <div class="swiper-slide"><img src="<?php echo get_template_directory_uri(); ?>/assets/bcg.png" alt="BCG"></div>
            <div class="swiper-slide"><img src="<?php echo get_template_directory_uri(); ?>/assets/americana.png" alt="Americana"></div>
          </div>
        </div>
      </section>

<!-- case study section -->
  <section class="bg-[#000] mb-5">
    <div class="container-fluid">

      <ul id="case-study-cards" class="no-padding pt-5">

      </ul>

    </div>

  </section>




  <!-- client reviews section -->
<?php echo do_shortcode('[kkrf_testimonials]'); ?>
      

      <!-- form section -->

      <section class="bi-contact-wrapper mt-5">
        <div class="bi-contact-container">
          <div class="bi-contact-grid">
            <div class="bi-contact-info">
              <h2 class="heading">Let's take the first step together.</h2>
              <p class="bi-contact-subtitle">Complete the form and an BI expert will contact you shortly.</p>
              <div class="bi-career-info">
                <p class="bi-career-text">Looking to join our team?</p>
                <p class="bi-career-link-wrapper">Visit our <a href="#" class="bi-career-link">Careers & Culture page</a></p>
              </div>
            </div>
            
            <div class="bi-form-wrapper">
              <form class="bi-contact-form">
                <div class="bi-form-row">
                  <div class="bi-form-group">
                    <label for="firstName" class="bi-form-label">First name*</label>
                    <input type="text" id="firstName" class="bi-form-input" required>
                  </div>
                  <div class="bi-form-group">
                    <label for="lastName" class="bi-form-label">Last name*</label>
                    <input type="text" id="lastName" class="bi-form-input" required>
                  </div>
                </div>
                
                <div class="bi-form-row">
                    <div class="bi-form-group">
                        <label for="workEmail" class="bi-form-label">Work email*</label>
                        <input type="email" id="workEmail" class="bi-form-input" required>
                      </div>
                  <div class="bi-form-group">
                    <label for="companyName" class="bi-form-label">Company name</label>
                    <input type="text" id="companyName" class="bi-form-input">
                  </div>
                </div>
                
                <div class="bi-form-row">
                    <div class="bi-form-group">
                        <label for="budget" class="bi-form-label">What is your budget range?*</label>
                        <select id="budget" class="bi-form-select" required>
                          <option value="" disabled selected>— Please choose an option —</option>
                          <option value="under-5k">Under $5,000</option>
                          <option value="5k-15k">$5,000 - $15,000</option>
                          <option value="15k-50k">$15,000 - $50,000</option>
                          <option value="50k-100k">$50,000 - $100,000</option>
                          <option value="over-100k">Over $100,000</option>
                        </select>
                      </div>
                  <div class="bi-form-group">
                    <label for="helpType" class="bi-form-label">How can we help?*</label>
                    <select id="helpType" class="bi-form-select" required>
                      <option value="" disabled selected>— Please choose an option —</option>
                      <option value="bi-consulting">BI Consulting</option>
                      <option value="data-analysis">Data Analysis</option>
                      <option value="dashboards">Dashboard Creation</option>
                      <option value="bi-implementation">BI Implementation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div class="bi-form-row">
                  <div class="bi-form-group bi-full-width">
                    <label for="moreInfo" class="bi-form-label">Let us know more about Your Project/Idea *</label>
                    <textarea id="moreInfo" class="bi-form-textarea" rows="5" required></textarea>
                  </div>
                </div>
                
                <div class="bi-form-row">
                  <button type="submit" class="bi-submit-button">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      
     
     

    








 <!-- faq section -->
 <section class="faq-section">
    <div class="container mx-auto px-4 py-16">
        <h2 class="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        
        <div class="max-w-4xl mx-auto space-y-6">
            <div class="faq-item bg-white rounded-xl shadow-lg p-6 cursor-pointer border-2 border-gray-200" onclick="toggleFAQ(this)">
                <div class="flex justify-between items-center mb-2">
                    <h3 class="text-xl font-semibold">What services does AWZ provide?</h3>
                   
                </div>
                <div class="faq-answer">
                    AWZ offers a comprehensive range of cloud computing services including storage solutions, database management, artificial intelligence platforms, machine learning tools, and serverless computing options to help businesses of all sizes scale their digital infrastructure.
                </div>
            </div>
            
            <div class="faq-item bg-white rounded-xl shadow-lg p-6 cursor-pointer border-2 border-gray-200" onclick="toggleFAQ(this)">
                <div class="flex justify-between items-center mb-2">
                    <h3 class="text-xl font-semibold">How does AWZ pricing work?</h3>
                    
                </div>
                <div class="faq-answer">
                    AWZ follows a pay-as-you-go pricing model, allowing customers to only pay for the services they use. We offer flexible pricing tiers, volume discounts, and free tier options for many services to help businesses optimize their costs while scaling their operations.
                </div>
            </div>
            
            <div class="faq-item bg-white rounded-xl shadow-lg p-6 cursor-pointer border-2 border-gray-200" onclick="toggleFAQ(this)">
                <div class="flex justify-between items-center mb-2">
                    <h3 class="text-xl font-semibold">What kind of support does AWZ offer?</h3>
                    
                </div>
                <div class="faq-answer">
                    AWZ provides multiple support options including 24/7 customer service, technical documentation, developer forums, and dedicated support plans. Our enterprise customers can access personalized support with dedicated technical account managers to ensure optimal performance of their cloud infrastructure.
                </div>
            </div>
        </div>
    </div>
</section>
  <!-- forms section -->
<?php echo do_shortcode('[bi_contact_form]'); ?>

  <!-- blogs section -->
  <?php echo do_shortcode('[tech_blog_section]'); ?>

<?php get_footer(); ?>