import React from 'react'
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
export default function Feature() {
  return (
    <>
      <div className="feature">
        <div className="featureItem">
          <span className="featureItemTitle">فروش</span>
          <div className="featurecontainer">
            <span className="featureItemMoney">2,136</span>
            <span className="featureItemRate">
              -11.4 <ArrowDownwardIcon className="navigate" />
            </span>
          </div>
          <span className="Featuresub">در مقایسه با ماه قبل</span>
        </div>
        <div className="featureItem">
          <span className="featureItemTitle">هزینه</span>
          <div className="featurecontainer">
            <span className="featureItemMoney">2,500</span>
            <span className="featureItemRate">
              +2.4 <ArrowUpwardIcon className="positive" />
            </span>
          </div>
          <span className="Featuresub">در مقایسه با ماه قبل</span>
        </div>
        <div className="featureItem">
          <span className="featureItemTitle">سود</span>
          <div className="featurecontainer">
            <span className="featureItemMoney">1,890</span>
            <span className="featureItemRate">
              +11.4 <ArrowDownwardIcon className="navigate" />
            </span>
          </div>
          <span className="Featuresub">در مقایسه با ماه قبل</span>
        </div>
      </div>
    </>
  );

}
