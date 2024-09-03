import "./Header.css";
import { FaSearch, FaMapMarker } from "react-icons/fa";
function Header() {
    return (
        <>
            <div className="header">
                <div className="title">
                    تلاش ما دسترسی سریعتر و آسان تر شما به خدمات پزشکی است
                </div>
                <div className="subTitle">
                    کافیست خدمات درمانی موردنظر خود را جستجو کنید
                </div>
                <div className="subTitle">
                    {" "}
                    (دریافت نوبت،مشاوره پزشکی،خدمات پزشکی در منزل)
                </div>
                <div className="searchDiv">
                    <div className="search-container">
                        <input
                            type="text"
                            placeholder="...جستجو پزشک،درمانگر،کلینیک"
                        />
                        <button>
                            <FaSearch className="faSearch" />
                        </button>
                    </div>
                    <div className="divCity">
                        <button>
                            انتخاب شهر
                            <FaMapMarker className="faMapMarker" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
