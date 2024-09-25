import { SVGProps } from "react";

export const Logo = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="52"
      height="50"
      viewBox="0 0 52 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x="2" y="2" width="48" height="46" stroke="black" strokeWidth="4" />
      <path
        d="M20.764 16.268C20.668 16.348 20.488 16.456 20.224 16.592C19.968 16.728 19.652 16.848 19.276 16.952C18.9 17.056 18.484 17.104 18.028 17.096C17.332 17.08 16.708 16.956 16.156 16.724C15.612 16.484 15.148 16.16 14.764 15.752C14.388 15.344 14.1 14.876 13.9 14.348C13.7 13.82 13.6 13.256 13.6 12.656C13.6 11.984 13.7 11.368 13.9 10.808C14.108 10.248 14.4 9.764 14.776 9.356C15.16 8.948 15.616 8.632 16.144 8.408C16.672 8.184 17.256 8.072 17.896 8.072C18.488 8.072 19.012 8.152 19.468 8.312C19.924 8.472 20.296 8.644 20.584 8.828L19.9 10.472C19.7 10.32 19.432 10.164 19.096 10.004C18.768 9.836 18.388 9.752 17.956 9.752C17.62 9.752 17.296 9.824 16.984 9.968C16.68 10.104 16.408 10.3 16.168 10.556C15.936 10.812 15.752 11.112 15.616 11.456C15.48 11.792 15.412 12.16 15.412 12.56C15.412 12.984 15.472 13.372 15.592 13.724C15.72 14.076 15.9 14.38 16.132 14.636C16.364 14.884 16.64 15.076 16.96 15.212C17.288 15.348 17.656 15.416 18.064 15.416C18.536 15.416 18.94 15.34 19.276 15.188C19.612 15.036 19.868 14.876 20.044 14.708L20.764 16.268ZM21.9672 12.596C21.9672 11.988 22.0832 11.412 22.3152 10.868C22.5472 10.324 22.8672 9.844 23.2752 9.428C23.6912 9.004 24.1712 8.672 24.7152 8.432C25.2592 8.192 25.8432 8.072 26.4672 8.072C27.0832 8.072 27.6632 8.192 28.2072 8.432C28.7512 8.672 29.2312 9.004 29.6472 9.428C30.0712 9.844 30.3992 10.324 30.6312 10.868C30.8712 11.412 30.9912 11.988 30.9912 12.596C30.9912 13.22 30.8712 13.804 30.6312 14.348C30.3992 14.892 30.0712 15.372 29.6472 15.788C29.2312 16.196 28.7512 16.516 28.2072 16.748C27.6632 16.98 27.0832 17.096 26.4672 17.096C25.8432 17.096 25.2592 16.98 24.7152 16.748C24.1712 16.516 23.6912 16.196 23.2752 15.788C22.8672 15.372 22.5472 14.892 22.3152 14.348C22.0832 13.804 21.9672 13.22 21.9672 12.596ZM23.7672 12.596C23.7672 12.988 23.8352 13.356 23.9712 13.7C24.1152 14.036 24.3112 14.336 24.5592 14.6C24.8152 14.856 25.1072 15.056 25.4352 15.2C25.7712 15.344 26.1352 15.416 26.5272 15.416C26.9032 15.416 27.2512 15.344 27.5712 15.2C27.8992 15.056 28.1832 14.856 28.4232 14.6C28.6632 14.336 28.8512 14.036 28.9872 13.7C29.1232 13.356 29.1912 12.988 29.1912 12.596C29.1912 12.196 29.1192 11.824 28.9752 11.48C28.8392 11.136 28.6472 10.836 28.3992 10.58C28.1592 10.316 27.8752 10.112 27.5472 9.968C27.2192 9.824 26.8632 9.752 26.4792 9.752C26.0952 9.752 25.7392 9.824 25.4112 9.968C25.0832 10.112 24.7952 10.316 24.5472 10.58C24.2992 10.836 24.1072 11.136 23.9712 11.48C23.8352 11.824 23.7672 12.196 23.7672 12.596ZM22.048 29.36L15.352 23.312L15.868 23.6L15.904 29H14.14V19.82H14.212L20.764 25.844L20.38 25.676L20.344 20.168H22.096V29.36H22.048ZM23.3745 29L27.3585 19.82H27.4545L31.4385 29H29.4225L26.8785 22.544L28.1385 21.68L25.0905 29H23.3745ZM26.0985 25.808H28.7505L29.3625 27.272H25.5585L26.0985 25.808ZM15.904 35.312L15.856 35.756L16.12 35.42L19 32.168H21.256L17.608 36.128L21.268 41H19.06L16.336 37.232L15.904 37.664V41H14.14V32.168H15.904V35.312ZM25.2652 32.168C25.8172 32.168 26.3092 32.24 26.7412 32.384C27.1732 32.52 27.5332 32.72 27.8212 32.984C28.1172 33.24 28.3412 33.552 28.4932 33.92C28.6452 34.28 28.7212 34.688 28.7212 35.144C28.7212 35.504 28.6652 35.864 28.5532 36.224C28.4492 36.584 28.2732 36.912 28.0252 37.208C27.7852 37.504 27.4652 37.744 27.0652 37.928C26.6652 38.104 26.1692 38.192 25.5772 38.192H24.3292V41H22.5892V32.168H25.2652ZM25.5652 36.512C25.8292 36.512 26.0492 36.468 26.2252 36.38C26.4012 36.292 26.5372 36.18 26.6332 36.044C26.7372 35.908 26.8092 35.768 26.8492 35.624C26.8972 35.472 26.9212 35.332 26.9212 35.204C26.9212 35.108 26.9052 34.988 26.8732 34.844C26.8492 34.692 26.7932 34.54 26.7052 34.388C26.6172 34.236 26.4812 34.108 26.2972 34.004C26.1212 33.9 25.8812 33.848 25.5772 33.848H24.3292V36.512H25.5652ZM27.1972 37.592L29.3812 41H27.3532L25.1212 37.64L27.1972 37.592ZM32.3929 38.252L29.1409 32.168H31.2889L33.5689 36.752L33.0529 36.788L35.2969 32.168H37.4449L34.1329 38.252V41H32.3929V38.252Z"
        fill="black"
      />
      <path
        d="M36.5941 40.136C36.5941 39.888 36.6821 39.68 36.8581 39.512C37.0421 39.344 37.2421 39.26 37.4581 39.26C37.6581 39.26 37.8461 39.344 38.0221 39.512C38.2061 39.68 38.2981 39.888 38.2981 40.136C38.2981 40.4 38.2061 40.612 38.0221 40.772C37.8461 40.924 37.6581 41 37.4581 41C37.2421 41 37.0421 40.924 36.8581 40.772C36.6821 40.612 36.5941 40.4 36.5941 40.136Z"
        fill="#FE6C02"
      />
    </svg>
  );
};

export const FooterLogo = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x="2" y="2" width="96" height="96" stroke="white" strokeWidth="4" />
      <path
        d="M38.116 31.292C37.892 31.4787 37.472 31.7307 36.856 32.048C36.2587 32.3653 35.5213 32.6453 34.644 32.888C33.7667 33.1307 32.796 33.2427 31.732 33.224C30.108 33.1867 28.652 32.8973 27.364 32.356C26.0947 31.796 25.012 31.04 24.116 30.088C23.2387 29.136 22.5667 28.044 22.1 26.812C21.6333 25.58 21.4 24.264 21.4 22.864C21.4 21.296 21.6333 19.8587 22.1 18.552C22.5853 17.2453 23.2667 16.116 24.144 15.164C25.04 14.212 26.104 13.4747 27.336 12.952C28.568 12.4293 29.9307 12.168 31.424 12.168C32.8053 12.168 34.028 12.3547 35.092 12.728C36.156 13.1013 37.024 13.5027 37.696 13.932L36.1 17.768C35.6333 17.4133 35.008 17.0493 34.224 16.676C33.4587 16.284 32.572 16.088 31.564 16.088C30.78 16.088 30.024 16.256 29.296 16.592C28.5867 16.9093 27.952 17.3667 27.392 17.964C26.8507 18.5613 26.4213 19.2613 26.104 20.064C25.7867 20.848 25.628 21.7067 25.628 22.64C25.628 23.6293 25.768 24.5347 26.048 25.356C26.3467 26.1773 26.7667 26.8867 27.308 27.484C27.8493 28.0627 28.4933 28.5107 29.24 28.828C30.0053 29.1453 30.864 29.304 31.816 29.304C32.9173 29.304 33.86 29.1267 34.644 28.772C35.428 28.4173 36.0253 28.044 36.436 27.652L38.116 31.292ZM40.9234 22.724C40.9234 21.3053 41.1941 19.9613 41.7354 18.692C42.2768 17.4227 43.0234 16.3027 43.9754 15.332C44.9461 14.3427 46.0661 13.568 47.3354 13.008C48.6048 12.448 49.9674 12.168 51.4234 12.168C52.8608 12.168 54.2141 12.448 55.4834 13.008C56.7528 13.568 57.8728 14.3427 58.8434 15.332C59.8328 16.3027 60.5981 17.4227 61.1394 18.692C61.6994 19.9613 61.9794 21.3053 61.9794 22.724C61.9794 24.18 61.6994 25.5427 61.1394 26.812C60.5981 28.0813 59.8328 29.2013 58.8434 30.172C57.8728 31.124 56.7528 31.8707 55.4834 32.412C54.2141 32.9533 52.8608 33.224 51.4234 33.224C49.9674 33.224 48.6048 32.9533 47.3354 32.412C46.0661 31.8707 44.9461 31.124 43.9754 30.172C43.0234 29.2013 42.2768 28.0813 41.7354 26.812C41.1941 25.5427 40.9234 24.18 40.9234 22.724ZM45.1234 22.724C45.1234 23.6387 45.2821 24.4973 45.5994 25.3C45.9354 26.084 46.3928 26.784 46.9714 27.4C47.5688 27.9973 48.2501 28.464 49.0154 28.8C49.7994 29.136 50.6488 29.304 51.5634 29.304C52.4408 29.304 53.2528 29.136 53.9994 28.8C54.7648 28.464 55.4274 27.9973 55.9874 27.4C56.5474 26.784 56.9861 26.084 57.3034 25.3C57.6208 24.4973 57.7794 23.6387 57.7794 22.724C57.7794 21.7907 57.6114 20.9227 57.2754 20.12C56.9581 19.3173 56.5101 18.6173 55.9314 18.02C55.3714 17.404 54.7088 16.928 53.9434 16.592C53.1781 16.256 52.3474 16.088 51.4514 16.088C50.5554 16.088 49.7248 16.256 48.9594 16.592C48.1941 16.928 47.5221 17.404 46.9434 18.02C46.3648 18.6173 45.9168 19.3173 45.5994 20.12C45.2821 20.9227 45.1234 21.7907 45.1234 22.724ZM41.112 61.84L25.488 47.728L26.692 48.4L26.776 61H22.66V39.58H22.828L38.116 53.636L37.22 53.244L37.136 40.392H41.224V61.84H41.112ZM44.2071 61L53.5031 39.58H53.7271L63.0231 61H58.3191L52.3831 45.936L55.3231 43.92L48.2111 61H44.2071ZM50.5631 53.552H56.7511L58.1791 56.968H49.3031L50.5631 53.552ZM26.776 75.728L26.664 76.764L27.28 75.98L34 68.392H39.264L30.752 77.632L39.292 89H34.14L27.784 80.208L26.776 81.216V89H22.66V68.392H26.776V75.728ZM48.6188 68.392C49.9068 68.392 51.0548 68.56 52.0628 68.896C53.0708 69.2133 53.9108 69.68 54.5828 70.296C55.2735 70.8933 55.7962 71.6213 56.1508 72.48C56.5055 73.32 56.6828 74.272 56.6828 75.336C56.6828 76.176 56.5522 77.016 56.2908 77.856C56.0482 78.696 55.6375 79.4613 55.0588 80.152C54.4988 80.8427 53.7522 81.4027 52.8188 81.832C51.8855 82.2427 50.7282 82.448 49.3468 82.448H46.4348V89H42.3748V68.392H48.6188ZM49.3188 78.528C49.9348 78.528 50.4482 78.4253 50.8588 78.22C51.2695 78.0147 51.5868 77.7533 51.8108 77.436C52.0535 77.1187 52.2215 76.792 52.3148 76.456C52.4268 76.1013 52.4828 75.7747 52.4828 75.476C52.4828 75.252 52.4455 74.972 52.3708 74.636C52.3148 74.2813 52.1842 73.9267 51.9788 73.572C51.7735 73.2173 51.4562 72.9187 51.0268 72.676C50.6162 72.4333 50.0562 72.312 49.3468 72.312H46.4348V78.528H49.3188ZM53.1268 81.048L58.2228 89H53.4908L48.2828 81.16L53.1268 81.048ZM65.2502 82.588L57.6622 68.392H62.6742L67.9942 79.088L66.7902 79.172L72.0262 68.392H77.0382L69.3102 82.588V89H65.2502V82.588Z"
        fill="white"
      />
      <path
        d="M75.0528 86.984C75.0528 86.4053 75.2581 85.92 75.6688 85.528C76.0981 85.136 76.5648 84.94 77.0688 84.94C77.5355 84.94 77.9741 85.136 78.3848 85.528C78.8141 85.92 79.0288 86.4053 79.0288 86.984C79.0288 87.6 78.8141 88.0947 78.3848 88.468C77.9741 88.8227 77.5355 89 77.0688 89C76.5648 89 76.0981 88.8227 75.6688 88.468C75.2581 88.0947 75.0528 87.6 75.0528 86.984Z"
        fill="#FE6C02"
      />
    </svg>
  );
};

export const FacebookIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 320 512"
      {...props}
    >
      <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
    </svg>
  );
};

export const InstragramIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 448 512"
      {...props}
    >
      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
    </svg>
  );
};

export const TikTokIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 448 512"
      {...props}
    >
      <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" />
    </svg>
  );
};

export const TwitterIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 512 512"
      {...props}
    >
      <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
    </svg>
  );
};

export const YoutubeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 576 512"
      {...props}
    >
      <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
    </svg>
  );
};

export const LinkArrowIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 0.266559 0.380955"
      fillRule="evenodd"
      clipRule="evenodd"
      {...props}
    >
      <g>
        <polygon points="0.266559,0.13328 0.13328,0 -0,0.13328 0.0355433,0.168819 0.108154,0.0962126 0.10815,0.304764 0.158409,0.304752 0.158413,0.0962165 0.231016,0.168819 " />
      </g>
    </svg>
  );
};

// export const Icon = (props: SVGProps<SVGSVGElement>) => {
//   return;
// };
