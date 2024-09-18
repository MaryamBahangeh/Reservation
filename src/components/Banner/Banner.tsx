import styles from "./Banner.module.css";
import BannerCard from "./components/BannerCard/BannerCard.tsx";

function Banner() {
  return (
    <div className={styles.banner}>
      <BannerCard
        bannerInfo={{
          title: "خدمات پزشکی رو برای شما در دسترستر کردیم",
          description:
            "فقط با چند کلیک به خدمات پزشکی مورد نیاز افراد کم توان جسمی(حرکتی)دسترسی پیدا میکنید.",

          img: "images/Banner/pic1.png",
          btnText: "مشاهده خدمات ",
          btnSize: "14.8rem",
          bgColor: "#a8035c",
        }}
      />
      <BannerCard
        bannerInfo={{
          title: "مشغله زندگی نمیزاره بیایی دکتر؟ مشاوره غیر حضوری بگیر",
          description: `اگر زمان کافی برای مراجعه به پزشک رو ندارید میتونید از طریق مشاوره غیر حضوری با پزشک صحبت کنید`,
          img: "images/Banner/pic2.png",
          btnText: "نوبت بگیر ",
          btnSize: "14.8rem",
          bgColor: "#11749e",
        }}
      />
    </div>
  );
}

export default Banner;
