import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Food Fusion Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://s3.amazonaws.com/prod.tctmd.com/public/styles/header_image/public/2021-03/Eating%20More%20Ultraprocessed%20%E2%80%98Junk%E2%80%99%20Food%20Linked%20to%20Higher%20CVD%20Risk.jpeg?itok=zmNGCySB"
        alt=""
      />
    </div>
  );
}
