import React from 'react'

export default function Feature() {
  return (
    <>
      <div className="feature">
        <div className="featureItem1">
          <span className="featureItemTitle">فروش</span>
          <div className="featurecontainer">
            <span className="featureItemMoney">2,136</span>
            <span className="featureItemRate">
              -11.4 
            </span>
          </div>
          <span className="Featuresub">در مقایسه با ماه قبل</span>
        </div>
        <div className="featureItem2">
          <span className="featureItemTitle">هزینه</span>
          <div className="featurecontainer">
            <span className="featureItemMoney">2,500</span>
            <span className="featureItemRate">
              +2.4 
            </span>
          </div>
          <span className="Featuresub">در مقایسه با ماه قبل</span>
        </div>
        <div className="featureItem3">
          <span className="featureItemTitle">سود</span>
          <div className="featurecontainer">
            <span className="featureItemMoney">1,890</span>
            <span className="featureItemRate">
              +11.4 
            </span>
          </div>
          <span className="Featuresub">در مقایسه با ماه قبل</span>
        </div>
      </div>
    </>
  );

}
