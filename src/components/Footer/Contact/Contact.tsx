import React from "react";
import styles from "./Contact.module.css";
function Contact(props) {
  return (
    <div className={styles.contact}>
      <div className={styles.communication}>
        <div>
          <img src="images/communications/call.png" />
          <p>تماس با پشتیبانی : ۱۲۳۴۵۶۷۸-۰۲۱ | ۱۲۳۴۵۶۷۸-۰۲۱</p>
        </div>
        <div>
          <img src="images/communications/sms.png" />
          <p>نشانی پست الکترونیک : smartix@yahoo.com</p>
        </div>
        <div>
          <img src="images/communications/building.png" />
          <p>
            نشانی : تهران _ میدان آرژانتین _ خیابان لاله _ کوچه صاد _ پلاک 18
          </p>
        </div>
      </div>
      <div className={styles.certificate}>
        <div>
          <img src="images/certificates/cetificate3.png" />
          <img src="images/certificates/cetificate2.png" />
          <img src="images/certificates/cetificate1.png" />
          <img src="images/certificates/cetificate.png" />
        </div>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه
        </p>
      </div>
    </div>
  );
}

export default Contact;
