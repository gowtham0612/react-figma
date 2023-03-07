import React from "react";
import "../Subside.css";
import Card from "./Card";

const Subside = () => {
  return (
    <div className="middle-content  ">
      {/* .....................................nav............................................................................................. */}
      <div className="nav">
        <div className="heading">
          <div className="main-header">
            <h1>Email</h1>
            <div className="heading-1">
              <div className="sub-heading-1">
                <div div className="sub-head">
              <div>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="alert1 svg-nav"
              >
                <path
                  d="M5.33333 28C5.16446 28.0004 4.99705 27.9687 4.84 27.9067C4.59191 27.8079 4.37921 27.6368 4.22944 27.4158C4.07967 27.1947 3.99974 26.9337 4 26.6667V5.33333C4 4.97971 4.14048 4.64057 4.39052 4.39052C4.64057 4.14048 4.97971 4 5.33333 4H26.6667C27.0203 4 27.3594 4.14048 27.6095 4.39052C27.8595 4.64057 28 4.97971 28 5.33333V9.33333C28 9.68696 27.8595 10.0261 27.6095 10.2761C27.3594 10.5262 27.0203 10.6667 26.6667 10.6667C26.313 10.6667 25.9739 10.5262 25.7239 10.2761C25.4738 10.0261 25.3333 9.68696 25.3333 9.33333V6.66667H6.66667V23.3067L9.33333 20.4267C9.46219 20.2876 9.61923 20.1776 9.79397 20.104C9.96871 20.0304 10.1571 19.995 10.3467 20H25.3333V14.6667C25.3333 14.313 25.4738 13.9739 25.7239 13.7239C25.9739 13.4738 26.313 13.3333 26.6667 13.3333C27.0203 13.3333 27.3594 13.4738 27.6095 13.7239C27.8595 13.9739 28 14.313 28 14.6667V21.3333C28 21.687 27.8595 22.0261 27.6095 22.2761C27.3594 22.5262 27.0203 22.6667 26.6667 22.6667H10.92L6.30667 27.5733C6.18235 27.7074 6.03179 27.8144 5.86435 27.8878C5.69691 27.9612 5.51616 27.9994 5.33333 28Z"
                  fill="#4E7D96"
                />
                <path
                  d="M21.3335 12.0002H10.6668C10.3132 12.0002 9.97407 11.8597 9.72402 11.6096C9.47397 11.3596 9.3335 11.0205 9.3335 10.6668C9.3335 10.3132 9.47397 9.97407 9.72402 9.72402C9.97407 9.47397 10.3132 9.3335 10.6668 9.3335H21.3335C21.6871 9.3335 22.0263 9.47397 22.2763 9.72402C22.5264 9.97407 22.6668 10.3132 22.6668 10.6668C22.6668 11.0205 22.5264 11.3596 22.2763 11.6096C22.0263 11.8597 21.6871 12.0002 21.3335 12.0002ZM21.3335 17.3335H10.6668C10.3132 17.3335 9.97407 17.193 9.72402 16.943C9.47397 16.6929 9.3335 16.3538 9.3335 16.0002C9.3335 15.6465 9.47397 15.3074 9.72402 15.0574C9.97407 14.8073 10.3132 14.6668 10.6668 14.6668H21.3335C21.6871 14.6668 22.0263 14.8073 22.2763 15.0574C22.5264 15.3074 22.6668 15.6465 22.6668 16.0002C22.6668 16.3538 22.5264 16.6929 22.2763 16.943C22.0263 17.193 21.6871 17.3335 21.3335 17.3335Z"
                  fill="#4E7D96"
                />
              </svg>
              <div className="alert2">
                <span className="notify">2</span>
              </div>
              </div>
              <div className="alert-total-3">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="svg-nav"
              >
                <path
                  d="M28 13.3332C27.9962 12.1538 27.6015 11.0089 26.8778 10.0777C26.154 9.14643 25.142 8.48137 24 8.18652V5.33319C23.9997 5.11823 23.9473 4.90654 23.8475 4.71617C23.7477 4.52579 23.6033 4.36238 23.4267 4.23985C23.2519 4.11824 23.0506 4.04026 22.8395 4.01242C22.6284 3.98458 22.4137 4.00771 22.2134 4.07985L10.5734 8.30652L5.41336 7.99985C5.2309 7.98809 5.04797 8.01398 4.87594 8.07591C4.70391 8.13784 4.54645 8.23449 4.41336 8.35985C4.28173 8.48533 4.17716 8.63641 4.10607 8.80379C4.03499 8.97118 3.9989 9.15134 4.00003 9.33319V18.6665C4.00027 18.8558 4.04082 19.0429 4.11898 19.2153C4.19715 19.3878 4.31113 19.5416 4.45336 19.6665C4.59447 19.79 4.76003 19.8823 4.93923 19.9374C5.11843 19.9926 5.30725 20.0093 5.49336 19.9865L7.24003 19.7732L8.49336 26.8932C8.54733 27.2062 8.7113 27.4897 8.95575 27.6926C9.20019 27.8955 9.50905 28.0045 9.82669 27.9999H14.6667C14.8613 28.0024 15.0541 27.9622 15.2315 27.8823C15.4089 27.8024 15.5667 27.6846 15.6938 27.5372C15.8208 27.3898 15.9141 27.2164 15.967 27.0291C16.0199 26.8419 16.0312 26.6453 16 26.4532L15.0134 20.5865L22.3067 22.6665C22.4259 22.6859 22.5475 22.6859 22.6667 22.6665C23.0203 22.6665 23.3595 22.526 23.6095 22.276C23.8595 22.0259 24 21.6868 24 21.3332V18.4799C25.142 18.185 26.154 17.5199 26.8778 16.5887C27.6015 15.6575 27.9962 14.5126 28 13.3332ZM6.66669 10.7465L9.33336 10.8932V16.8265L6.66669 17.1599V10.7465ZM13.0934 25.3332H10.9334L9.89336 19.4399L10.5734 19.3599L12.1734 19.7999L13.0934 25.3332ZM21.3334 19.5732L14.0667 17.5599C13.8497 17.4141 13.5947 17.3352 13.3334 17.3332L12 16.9599V10.6665L21.3334 7.27985V19.5732ZM24 15.5732V11.0399C24.398 11.276 24.7276 11.6116 24.9566 12.0136C25.1855 12.4157 25.3059 12.8705 25.3059 13.3332C25.3059 13.7959 25.1855 14.2506 24.9566 14.6527C24.7276 15.0548 24.398 15.3904 24 15.6265V15.5732Z"
                  fill="#4E7D96"
                />
              </svg>
              <div className="alert3">
                <span className="notify">2</span>
              </div></div>

              <svg
                width="32"
                height="31"
                viewBox="0 0 32 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="svg-nav"
              >
                <path
                  d="M28.4265 12.2309L25.9065 11.424L27.0932 9.14438C27.2135 8.90577 27.2537 8.63718 27.2083 8.37566C27.163 8.11415 27.0342 7.87261 26.8398 7.68437L23.9998 4.95646C23.8028 4.76702 23.5489 4.64167 23.2739 4.59802C22.9989 4.55437 22.7165 4.59463 22.4665 4.71312L20.0932 5.85296L19.2532 3.43241C19.1645 3.1801 18.9961 2.96063 18.7714 2.80454C18.5468 2.64845 18.2771 2.56351 17.9998 2.56153H13.9998C13.7203 2.56083 13.4476 2.64454 13.2203 2.80082C12.993 2.95709 12.8226 3.17804 12.7332 3.43241L11.8932 5.85296L9.51984 4.71312C9.27142 4.59758 8.99179 4.55893 8.71954 4.60251C8.44728 4.6461 8.19582 4.76977 7.99984 4.95646L5.15984 7.68437C4.96262 7.87362 4.83212 8.11748 4.78668 8.38166C4.74123 8.64585 4.78314 8.91707 4.90651 9.15719L6.09317 11.4369L3.57318 12.2437C3.3105 12.3289 3.08201 12.4907 2.91951 12.7064C2.757 12.9222 2.66857 13.1813 2.66651 13.4476V17.2897C2.66579 17.5582 2.75293 17.8201 2.91563 18.0384C3.07833 18.2568 3.30835 18.4205 3.57318 18.5064L6.09317 19.3132L4.90651 21.5929C4.78621 21.8315 4.74598 22.1001 4.79136 22.3616C4.83673 22.6231 4.96548 22.8647 5.15984 23.0529L7.99984 25.7808C8.19686 25.9703 8.45074 26.0956 8.72578 26.1393C9.00082 26.1829 9.28319 26.1427 9.53317 26.0242L11.9065 24.8843L12.7465 27.3049C12.836 27.5592 13.0064 27.7802 13.2337 27.9365C13.461 28.0927 13.7336 28.1764 14.0132 28.1757H18.0132C18.2927 28.1764 18.5654 28.0927 18.7927 27.9365C19.02 27.7802 19.1904 27.5592 19.2798 27.3049L20.1198 24.8843L22.4932 26.0242C22.74 26.1368 23.0169 26.1738 23.2864 26.1303C23.5559 26.0868 23.8049 25.9648 23.9998 25.7808L26.8398 23.0529C27.0371 22.8637 27.1676 22.6198 27.213 22.3556C27.2584 22.0914 27.2165 21.8202 27.0932 21.5801L25.9065 19.3004L28.4265 18.4936C28.6892 18.4084 28.9177 18.2466 29.0802 18.0308C29.2427 17.8151 29.3311 17.556 29.3332 17.2897V13.4476C29.3339 13.1791 29.2467 12.9172 29.0841 12.6988C28.9214 12.4805 28.6913 12.3168 28.4265 12.2309ZM26.6665 16.3676L25.0665 16.8799C24.6986 16.9945 24.361 17.1847 24.0772 17.4371C23.7935 17.6896 23.5703 17.9983 23.4231 18.3419C23.276 18.6855 23.2084 19.0557 23.2251 19.4269C23.2418 19.7981 23.3424 20.1614 23.5198 20.4915L24.2798 21.9515L22.8132 23.3603L21.3332 22.5918C20.9912 22.4282 20.6167 22.3371 20.2349 22.3246C19.8531 22.3121 19.473 22.3785 19.1203 22.5194C18.7675 22.6602 18.4504 22.8722 18.1904 23.1411C17.9304 23.4099 17.7335 23.7292 17.6132 24.0775L17.0798 25.6143H14.9598L14.4265 24.0775C14.3072 23.7241 14.1092 23.3998 13.8464 23.1273C13.5835 22.8547 13.2621 22.6403 12.9044 22.4989C12.5467 22.3576 12.1612 22.2927 11.7748 22.3088C11.3884 22.3248 11.0102 22.4214 10.6665 22.5918L9.14651 23.3219L7.67984 21.9131L8.47984 20.4915C8.6573 20.1614 8.75787 19.7981 8.77457 19.4269C8.79127 19.0557 8.7237 18.6855 8.57656 18.3419C8.42941 17.9983 8.20621 17.6896 7.92243 17.4371C7.63866 17.1847 7.3011 16.9945 6.93317 16.8799L5.33317 16.3676V14.3697L6.93317 13.8574C7.3011 13.7428 7.63866 13.5526 7.92243 13.3002C8.20621 13.0477 8.42941 12.739 8.57656 12.3954C8.7237 12.0518 8.79127 11.6815 8.77457 11.3104C8.75787 10.9392 8.6573 10.5759 8.47984 10.2458L7.71984 8.8242L9.18651 7.41542L10.6665 8.14543C11.0102 8.31588 11.3884 8.41248 11.7748 8.42852C12.1612 8.44457 12.5467 8.37967 12.9044 8.23833C13.2621 8.09699 13.5835 7.8826 13.8464 7.61002C14.1092 7.33744 14.3072 7.01321 14.4265 6.6598L14.9598 5.12295H17.0398L17.5732 6.6598C17.6925 7.01321 17.8905 7.33744 18.1533 7.61002C18.4161 7.8826 18.7376 8.09699 19.0953 8.23833C19.453 8.37967 19.8384 8.44457 20.2249 8.42852C20.6113 8.41248 20.9895 8.31588 21.3332 8.14543L22.8532 7.41542L24.3198 8.8242L23.5198 10.2458C23.3495 10.5742 23.2546 10.934 23.2416 11.3007C23.2285 11.6674 23.2977 12.0326 23.4444 12.3714C23.591 12.7102 23.8118 13.0148 24.0916 13.2645C24.3715 13.5143 24.704 13.7034 25.0665 13.819L26.6665 14.3313V16.3676ZM15.9998 10.2458C14.945 10.2458 13.9139 10.5462 13.0368 11.1091C12.1597 11.6721 11.4762 12.4721 11.0725 13.4082C10.6688 14.3443 10.5632 15.3743 10.769 16.3681C10.9748 17.3618 11.4827 18.2746 12.2286 18.991C12.9745 19.7075 13.9248 20.1954 14.9594 20.393C15.9939 20.5907 17.0663 20.4893 18.0408 20.1015C19.0154 19.7138 19.8483 19.0572 20.4343 18.2147C21.0204 17.3723 21.3332 16.3818 21.3332 15.3686C21.3332 14.01 20.7713 12.707 19.7711 11.7462C18.7709 10.7855 17.4143 10.2458 15.9998 10.2458ZM15.9998 17.9301C15.4724 17.9301 14.9569 17.7798 14.5183 17.4984C14.0798 17.2169 13.738 16.8169 13.5362 16.3489C13.3343 15.8808 13.2815 15.3658 13.3844 14.8689C13.4873 14.3721 13.7413 13.9157 14.1142 13.5574C14.4872 13.1992 14.9623 12.9553 15.4796 12.8564C15.9969 12.7576 16.5331 12.8083 17.0203 13.0022C17.5076 13.1961 17.9241 13.5244 18.2171 13.9456C18.5101 14.3668 18.6665 14.862 18.6665 15.3686C18.6665 16.048 18.3856 16.6995 17.8855 17.1798C17.3854 17.6602 16.7071 17.9301 15.9998 17.9301Z"
                  fill="#4E7D96"
                />
              </svg></div></div>
              
              <div className="admin-name-1">
                <div className="admin-name">
                <img src={require("../images/3.jpg")} alt=" "/></div>
                <div>
                <h5 className="header-1">Madison Eve</h5>
                <h5 className="header-2">Admin</h5>
                </div>
              </div>
            </div>

   
          </div>

        </div>
      </div>
      {/* ------------------------------------------------ sub box --------------------------------------------------------------------- */}
     <div className="go">
      <div className="box">
        <div className="button-mail">
        <button type="button" className="add-mail">
        + 
        <span className="label"> New Mail</span>
       
        </button></div>
        <div className="sub-box-1">
          <div>
            <svg
              className="icons"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 4V18.6667H10.9375C11.546 20.9418 13.5419 22.6667 16 22.6667C18.4581 22.6667 20.454 20.9418 21.0625 18.6667H25.3333V25.3333H6.66667V21.3333H4V28H28V4H4ZM6.66667 6.66667H25.3333V16H18.6667V17.3333C18.6667 18.8219 17.4886 20 16 20C14.5114 20 13.3333 18.8219 13.3333 17.3333V16H6.66667V6.66667Z"
                fill="#4E7D96"
              />
            </svg>
          </div>
          <h6 className="custom">Inbox</h6>
        </div>
        <div className="sub-box-2">
          <div>
            <svg
              className="icons"
              width="36"
              height="35"
              viewBox="0 0 36 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_146_6)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.33317 8.61638V11.8519C7.33317 12.5882 6.73584 13.1856 5.99984 13.1856C5.26384 13.1856 4.6665 12.5882 4.6665 11.8519V6.66675C4.6665 6.22704 4.88384 5.8143 5.2465 5.56645C5.6105 5.31756 6.07317 5.26467 6.4825 5.42437L30.4825 14.7577C30.9958 14.9568 31.3332 15.4505 31.3332 16.0001C31.3332 16.5497 30.9958 17.0433 30.4825 17.2425L6.4825 26.5758C6.07317 26.7355 5.6105 26.6826 5.2465 26.4337C4.88384 26.1859 4.6665 25.7731 4.6665 25.3334C4.6665 25.3334 4.6665 21.4248 4.6665 18.6663C4.6665 16.4574 6.45717 14.6665 8.6665 14.6665H15.3332C16.0692 14.6665 16.6665 15.2638 16.6665 16.0001C16.6665 16.7364 16.0692 17.3337 15.3332 17.3337C15.3332 17.3337 11.4252 17.3337 8.6665 17.3337C7.9305 17.3337 7.33317 17.93 7.33317 18.6663V23.3838L26.3212 16.0001L7.33317 8.61638Z"
                  fill="#6F96AA"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_146_6"
                  x="-2"
                  y="0"
                  width="40"
                  height="40"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_146_6"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_146_6"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <h6>Sent</h6>
        </div>
        <div className="sub-box-2">
          <div>
            <svg
              className="icons"
              width="36"
              height="34"
              viewBox="0 0 36 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_137_123)">
                <path
                  d="M10.4975 24.3262L12.9142 16.8885C13.182 16.0645 12.8886 15.1618 12.1877 14.6525L5.86078 10.0557L13.6812 10.0557C14.5477 10.0557 15.3156 9.49781 15.5833 8.67376L18 1.23606L20.4167 8.67376C20.6844 9.49781 21.4523 10.0557 22.3188 10.0557H30.1392L23.8123 14.6525C23.1114 15.1618 22.818 16.0645 23.0858 16.8885L25.5025 24.3262L19.1756 19.7295C18.4746 19.2202 17.5254 19.2202 16.8244 19.7295L10.4975 24.3262ZM10.4975 24.3262L9.54649 24.0172L10.4975 24.3262L11.0853 25.1353L10.4975 24.3262Z"
                  stroke="#6F96AA"
                  stroke-width="2"
                  shape-rendering="crispEdges"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_137_123"
                  x="0.858887"
                  y="0.23584"
                  width="34.2822"
                  height="33.0947"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_137_123"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_137_123"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <h6>Favorite</h6>
        </div>
        <div className="sub-box-2">
          <div>
            <svg
              className="icons"
              width="32"
              height="37"
              viewBox="0 0 32 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_146_10)">
                <path
                  d="M26 23V26C26 26.7956 25.6839 27.5587 25.1213 28.1213C24.5587 28.6839 23.7956 29 23 29H9C8.20435 29 7.44129 28.6839 6.87868 28.1213C6.31607 27.5587 6 26.7956 6 26V6C6 5.20435 6.31607 4.44129 6.87868 3.87868C7.44129 3.31607 8.20435 3 9 3H12C12.2652 3 12.5196 3.10536 12.7071 3.29289C12.8946 3.48043 13 3.73478 13 4C13 4.26522 12.8946 4.51957 12.7071 4.70711C12.5196 4.89464 12.2652 5 12 5H9C8.73478 5 8.48043 5.10536 8.29289 5.29289C8.10536 5.48043 8 5.73478 8 6V26C8 26.2652 8.10536 26.5196 8.29289 26.7071C8.48043 26.8946 8.73478 27 9 27H23C23.2652 27 23.5196 26.8946 23.7071 26.7071C23.8946 26.5196 24 26.2652 24 26V23C24 22.7348 24.1054 22.4804 24.2929 22.2929C24.4804 22.1054 24.7348 22 25 22C25.2652 22 25.5196 22.1054 25.7071 22.2929C25.8946 22.4804 26 22.7348 26 23ZM26 12V18C26 18.2652 25.8946 18.5196 25.7071 18.7071C25.5196 18.8946 25.2652 19 25 19C24.7348 19 24.4804 18.8946 24.2929 18.7071C24.1054 18.5196 24 18.2652 24 18V13H19C18.2044 13 17.4413 12.6839 16.8787 12.1213C16.3161 11.5587 16 10.7956 16 10V4C16.0016 3.86932 16.0288 3.74022 16.08 3.62C16.1815 3.37565 16.3757 3.18147 16.62 3.08C16.8635 2.97998 17.1365 2.97998 17.38 3.08C17.5028 3.12759 17.6149 3.19896 17.71 3.29L25.71 11.29C25.801 11.3851 25.8724 11.4972 25.92 11.62C25.9712 11.7402 25.9984 11.8693 26 12ZM19 11H22.59L18 6.41V10C18 10.2652 18.1054 10.5196 18.2929 10.7071C18.4804 10.8946 18.7348 11 19 11Z"
                  fill="#6F96AA"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_146_10"
                  x="-4"
                  y="0"
                  width="40"
                  height="40"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_146_10"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_146_10"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <h6>Draft</h6>
        </div>
        <div className="sub-box-2">
          <div>
            <svg
              className="icons"
              width="36"
              height="38"
              viewBox="0 0 36 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_146_14)">
                <path
                  d="M18.7811 2.6665L4.31494 17.1327L6.20036 19.0181L19.8853 5.33317H28.6665V14.1144L16.867 25.9139L9.97119 19.0181L8.08577 20.9035L16.867 29.6847L31.3332 15.2186V2.6665L18.7811 2.6665Z"
                  fill="#6F96AA"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_146_14"
                  x="-2"
                  y="0"
                  width="40"
                  height="40"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_146_14"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_146_14"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <h6>Important</h6>
        </div>
        <div className="sub-box-2">
          <div>
            <svg
              className="icons"
              width="32"
              height="36"
              viewBox="0 0 32 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_146_19)">
                <path
                  d="M16 28C9.4 28 4 22.6 4 16C4 9.4 9.4 4 16 4C16.4 4 16.7 4 17.1 4.1C17.8 4.2 18.3 4.8 18.2 5.5C18.1 6.2 17.5 6.7 16.8 6.6C16.5 6.6 16.2 6.6 15.9 6.6C10.7 6.6 6.4 10.9 6.4 16.1C6.4 21.3 10.7 25.6 15.9 25.6C21.1 25.6 25.4 21.3 25.4 16.1C25.4 15.7 25.4 15.4 25.3 15C25.2 14.3 25.7 13.7 26.4 13.6C27.1 13.5 27.7 14 27.8 14.7C27.8 15.1 27.9 15.6 27.9 16.1C28 22.6 22.6 28 16 28Z"
                  fill="#6F96AA"
                />
                <path
                  d="M18.8002 20C18.5002 20 18.2002 19.9 17.9002 19.6L15.1002 16.8C14.9002 16.6 14.7002 16.2 14.7002 15.9V9.2C14.7002 8.5 15.3002 7.9 16.0002 7.9C16.7002 7.9 17.3002 8.5 17.3002 9.2V15.5L19.7002 17.9C20.2002 18.4 20.2002 19.2 19.7002 19.7C19.4002 19.9 19.1002 20 18.8002 20ZM20.6002 7.6C19.9002 7.6 19.3002 7 19.3002 6.3C19.3002 5.6 19.9002 5 20.6002 5C21.3002 5 21.9002 5.6 21.9002 6.3C21.9002 7 21.3002 7.6 20.6002 7.6ZM23.5002 9.5C22.8002 9.5 22.2002 8.9 22.2002 8.2C22.2002 7.5 22.8002 6.9 23.4002 6.9C24.1002 6.9 24.7002 7.5 24.7002 8.2C24.8002 9 24.2002 9.5 23.5002 9.5ZM25.7002 12.6C25.0002 12.6 24.4002 12 24.4002 11.3C24.4002 10.6 25.0002 10 25.6002 10C26.3002 10 26.9002 10.6 26.9002 11.3C26.9002 12 26.4002 12.6 25.7002 12.6Z"
                  fill="#6F96AA"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_146_19"
                  x="-4"
                  y="0"
                  width="40"
                  height="40"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_146_19"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_146_19"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <h6>Scheduled</h6>
        </div>
        <div className="sub-box-2 dropdown">
          <div>
            <svg
              className="icons"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_146_24)">
                <path
                  d="M16.0002 20.0001C15.8248 20.0011 15.6508 19.9675 15.4884 19.9011C15.3259 19.8348 15.1782 19.737 15.0536 19.6134L9.72025 14.2801C9.46918 14.029 9.32812 13.6885 9.32812 13.3334C9.32812 12.9783 9.46918 12.6378 9.72025 12.3868C9.97132 12.1357 10.3118 11.9946 10.6669 11.9946C11.022 11.9946 11.3625 12.1357 11.6136 12.3868L16.0002 16.7868L20.3869 12.4001C20.642 12.1816 20.9701 12.0675 21.3057 12.0805C21.6412 12.0934 21.9595 12.2325 22.197 12.47C22.4345 12.7075 22.5736 13.0258 22.5865 13.3613C22.5995 13.6969 22.4853 14.025 22.2669 14.2801L16.9336 19.6134C16.6852 19.8597 16.35 19.9986 16.0002 20.0001Z"
                  fill="#6F96AA"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_146_24"
                  x="-4"
                  y="0"
                  width="40"
                  height="40"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_146_24"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_146_24"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <h6>More</h6>
        </div>
        <h4 className="label-font">Labels</h4>
        <div className="label-icon">
        <div className="sub-box-2">
          <div>
            <svg
              className="icons dot"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="2"
                y="2"
                width="16"
                height="16"
                rx="8"
                fill="white"
                stroke="#FF844B"
                stroke-width="4"
              />
            </svg>
          </div>
          <h6>Work</h6>
        </div>
        <div className="sub-box-2">
          <div>
            <svg
              className="icons dot"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="2"
                y="2"
                width="16"
                height="16"
                rx="8"
                fill="white"
                stroke="#3CC2E0"
                stroke-width="4"
              />
            </svg>
          </div>
          <h6>Side Projects</h6>
        </div></div>
      </div>

 {/*--------------------------------------------search icon----------------------------------------------------------------------------------- */}
             <div className="sub-middle-card">
               <div className="search-bar">
              <form className="example">
                <input
                  type="text"
                  name="search"
                  autocomplete="off"
                />
              </form>
              <div className="search-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#FF844B"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                  />
                </svg>
              </div>
            </div> 
{/* -----------------------------------------------------------------------card-------------------------------------------------------------------------------------- */}
            {/* <div className="scroll">
            <div className="content-box">
              <div  className="square-img"> <img src={require("../images/1.jpg")} alt=" "/></div>
            <div>
              <h5 className="card-h5">Tony Soap</h5>
              <p className="para">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Praesentium voluptates ipsa debitis nesciunt repudiandae tempora
                laboriosam temporibus perspiciatis odio omnis.
              </p>
            </div>
          </div>

          <div className="content-box1">
            <div className="square-img"> <img src={require("../images/2.jpg")} alt=" "/></div>
            <div>
              <h5 className="card-h5">Nadila Adja</h5>
              <p className="para">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Praesentium voluptates ipsa debitis nesciunt repudiandae tempora
                laboriosam temporibus perspiciatis odio omnis.
              </p>
            </div>
          </div>
          <div className="content-box2">
            <div className="square-img"> <img src={require("../images/3.jpg")} alt=" "/></div>
            <div>
              <h5 className="card-h5">Samantha WIlliam</h5>
              <p className="para">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Praesentium voluptates ipsa debitis nesciunt repudiandae tempora
                laboriosam temporibus perspiciatis odio omnis.
              </p>
            </div>
          </div>
          <div className="content-box2">
            <div className="square-img"> <img src={require("../images/1.jpg")} alt=" "/></div>
            <div>
              <h5 className="card-h5">Karen Hope</h5>
              <p className="para">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Praesentium voluptates ipsa debitis nesciunt repudiandae tempora
                laboriosam temporibus perspiciatis odio omnis.
              </p>
            </div>
          </div>
          <div className="content-box1">
            <div className="square-img"> <img src={require("../images/3.jpg")} alt=" "/></div>
            <div>
              <h5 className="card-h5">Jordan Nico</h5>
              <p className="para">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Praesentium voluptates ipsa debitis nesciunt repudiandae tempora
                laboriosam temporibus perspiciatis odio omnis.
              </p>
            </div>
          </div>
          <div>&nbsp;</div>
        </div>  */}
 {/* ---------------------------------------------------------------------------------------------------------------------------------------------------------- */}
        <Card/></div></div>
    </div>
  );
};

export default Subside;
