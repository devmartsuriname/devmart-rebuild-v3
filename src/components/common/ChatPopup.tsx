const ChatPopup = () => {
  return (
    <>
      <div className="chat-icon"><button type="button" className="chat-toggler"><i className="fa fa-comment"></i></button></div>
      <div id="chat-popup" className="chat-popup">
        <div className="popup-inner">
          <div className="close-chat"><i className="fa fa-times"></i></div>
          <div className="chat-form">
            <p>Please fill out the form below and we will get back to you as soon as possible.</p>
            <form action="assets/inc/sendemail.php" method="POST" className="contact-form-validated">
              <div className="form-group">
                <input type="text" name="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea name="message" placeholder="Your Text" required></textarea>
              </div>
              <div className="form-group message-btn">
                <button type="submit" className="thm-btn"> Submit Now
                  <span className="fas fa-arrow-right"></span>
                </button>
              </div>
              <div className="result"></div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatPopup;
