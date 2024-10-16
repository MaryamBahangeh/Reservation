import styles from "./Banner.module.css";
import BannerCard from "./components/BannerCard/BannerCard.tsx";

function Banner() {
  return (
    <div className={styles.banner}>
      <ul className={styles.cards}>
        <BannerCard
          isPrimary={true}
          title="خدمات پزشکی رو برای شما در دسترستر کردیم"
          description="فقط با چند کلیک به خدمات پزشکی مورد نیاز افراد کم توان جسمی(حرکتی)دسترسی پیدا میکنید."
          img="/images/banner/person1.png"
          btnText="مشاهده خدمات"
        />
        <BannerCard
          isPrimary={false}
          title="مشغله زندگی نمیزاره بیایی دکتر؟ مشاوره غیر حضوری بگیر"
          description="اگر زمان کافی برای مراجعه به پزشک رو ندارید میتونید از طریق مشاوره غیر حضوری با پزشک صحبت کنید"
          img="/images/banner/person2.png"
          btnText="نوبت بگیر"
        />
      </ul>
    </div>
  );
}

export default Banner;
