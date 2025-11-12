@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Montserrat:wght@600;700;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;600;700&display=swap');
:root { --primary-color: #6a0dad; --secondary-color: #f4f4f4; --text-color: #333; --light-text: #fff; }
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: 'Lato', 'Hind Siliguri', sans-serif; background-color: #fff; color: var(--text-color); line-height: 1.8; }
h1, h2, h3, h4, h5, h6, .logo, .navbar ul li a { font-family: 'Montserrat', 'Hind Siliguri', sans-serif; font-weight: 700; }
.container { max-width: 1100px; margin: auto; padding: 0 20px; }
.section-title { text-align: center; margin-bottom: 50px; }
.section-title h2 { font-size: 2.5rem; color: var(--primary-color); margin-bottom: 10px; }
.section-title p { font-size: 1.1rem; color: #666; }
.navbar { background: #fff; padding: 1rem 0; border-bottom: 1px solid #ddd; position: sticky; top: 0; z-index: 100; }
.navbar .container { display: flex; justify-content: space-between; align-items: center; }
.navbar .logo { font-size: 1.8rem; font-weight: 700; color: var(--primary-color); text-decoration: none; }
.navbar ul { list-style: none; display: flex; }
.navbar ul li a { color: var(--text-color); padding: 0.5rem 1rem; text-decoration: none; font-weight: 600; transition: color 0.3s ease; }
.navbar ul li a:hover, .navbar ul li a.active { color: var(--primary-color); }
.hero-new { padding: 80px 0; background: #fff; }
.hero-content { display: flex; align-items: center; justify-content: space-between; gap: 50px; }
.hero-text { flex: 1.2; }
.hero-subtitle { display: inline-block; background: #f0e6ff; color: var(--primary-color); padding: 5px 15px; border-radius: 20px; font-weight: 600; margin-bottom: 15px; }
.hero-text h1 { font-family: 'Hind Siliguri', sans-serif; font-size: 3.2rem; color: var(--primary-color); line-height: 1.2; margin-bottom: 20px; }
.hero-description { font-family: 'Hind Siliguri', sans-serif; font-size: 1.1rem; margin-bottom: 30px; color: #555; }
.cta-button { background-color: var(--primary-color); color: var(--light-text); padding: 1rem 2rem; border-radius: 5px; text-decoration: none; font-weight: 700; font-size: 1rem; transition: all 0.3s ease; }
.cta-button:hover { opacity: 0.9; transform: translateY(-3px); }
.hero-image-wrapper { position: relative; flex: 1; display: flex; align-items: center; justify-content: center; }
.main-hero-image { border-radius: 50%; width: 100%; max-width: 350px; height: auto; box-shadow: 0 10px 40px rgba(0,0,0,0.1); }
.tech-icon { position: absolute; background: #fff; border-radius: 50%; width: 60px; height: 60px; display: flex; align-items: center; justify-content: center; box-shadow: 0 5px 15px rgba(0,0,0,0.1); font-size: 24px; color: var(--primary-color); animation: float 6s ease-in-out infinite; }
.icon-1 { top: 10%; left: 5%; } .icon-2 { top: 20%; right: 5%; animation-delay: 2s; } .icon-3 { bottom: 15%; left: 0%; animation-delay: 4s; } .icon-4 { bottom: 25%; right: 0%; animation-delay: 1s; }
@keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-20px); } 100% { transform: translateY(0px); } }
.about-final { padding: 100px 0; background: #f9f9f9; }
.about-flex-container-final { display: flex; align-items: center; gap: 60px; }
.about-image-col-final { flex: 1; max-width: 400px; }
.about-image-col-final img { width: 100%; border-radius: 15px; box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1); }
.about-text-col-final { flex: 1.5; }
.about-text-col-final h3 { font-size: 2rem; color: var(--primary-color); margin-bottom: 15px; }
.about-text-col-final p { color: #555; margin-bottom: 30px; }
.about-skills { margin-top: 40px; }
.about-skills-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
.skill-card-item { background: #fff; padding: 25px; border-radius: 10px; box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05); text-align: center; }
.skill-card-item .skill-title { font-weight: 700; display: block; font-size: 1.1rem; }
.social-buttons-about { margin-top: 40px; }
.social-btn { display: inline-block; text-decoration: none; color: var(--primary-color); border: 2px solid var(--primary-color); padding: 10px 20px; border-radius: 5px; margin-right: 10px; margin-bottom: 10px; font-weight: 600; transition: all 0.3s ease; }
.social-btn:hover { background: var(--primary-color); color: #fff; transform: translateY(-3px); }
.social-btn i { margin-right: 8px; }
.services { padding: 80px 0; }
.services-container { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; }
.service-card { background: #fff; padding: 40px 30px; text-align: center; border-radius: 10px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08); transition: transform 0.3s ease, box-shadow 0.3s ease; }
.service-card:hover { transform: translateY(-10px); box-shadow: 0 10px 30px rgba(106, 13, 173, 0.15); }
.service-card .icon-box { margin: 0 auto 20px auto; width: 70px; height: 70px; background: var(--primary-color); color: #fff; border-radius: 50%; display: flex; justify-content: center; align-items: center; font-size: 30px; transition: transform 0.4s ease; }
.service-card:hover .icon-box { transform: rotate(360deg); }
.service-card h3 { font-size: 1.5rem; margin-bottom: 15px; }
.portfolio { padding: 80px 0; background-color: #f9f9f9; }
#portfolio-filters { padding: 0; margin: 0 auto 35px auto; list-style: none; text-align: center; }
#portfolio-filters li { cursor: pointer; display: inline-block; padding: 10px 18px; font-size: 14px; font-weight: 600; line-height: 1; text-transform: uppercase; color: #444444; margin: 0 5px 10px 5px; transition: all 0.3s ease-in-out; border-radius: 5px; background: #fff; box-shadow: 0 2px 5px rgba(0,0,0,0.05); }
#portfolio-filters li:hover, #portfolio-filters li.filter-active { color: #fff; background: var(--primary-color); }
.portfolio-container { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 30px; }
.portfolio-item { overflow: hidden; border-radius: 10px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); }
.portfolio-item img { width: 100%; transition: transform 0.4s ease; display: block; }
.portfolio-item:hover img { transform: scale(1.1); }
.testimonials { padding: 80px 0; }
.testimonial-container { display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 30px; }
.testimonial-card { background: #f9f9f9; padding: 30px; border-left: 5px solid var(--primary-color); border-radius: 5px; }
.testimonial-card p { font-style: italic; margin-bottom: 15px; }
.testimonial-card h4 { font-weight: 600; }
.testimonial-card span { font-size: 0.9rem; color: #777; }
.contact { padding: 80px 0; }
.contact-info { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px; }
.info-box { text-align: center; padding: 30px; background: #fff; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08); border-radius: 10px; }
.info-box i { font-size: 32px; color: var(--primary-color); border-radius: 50%; padding: 15px; background: #f0e6ff; display: inline-block; margin-bottom: 15px; }
#footer { background: var(--primary-color); color: #fff; font-size: 14px; text-align: center; padding: 50px 0; }
#footer h3 { font-size: 36px; font-weight: 700; margin: 0 0 15px 0; }
#footer .social-links a { font-size: 18px; display: inline-block; background: rgba(255, 255, 255, 0.1); color: #fff; line-height: 1; padding: 8px 0; margin-right: 4px; border-radius: 50%; text-align: center; width: 36px; height: 36px; transition: 0.3s; }
#footer .social-links a:hover { background: #fff; color: var(--primary-color); }
