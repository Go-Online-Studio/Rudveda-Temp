/* Karmakand Data & Dynamic Rendering */
(function(){
'use strict';

const ICONS = {
  shiv: `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="18" height="18" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve"><g><path d="M512 214.911c0-97.74-67.718-76.495-83.346-202.747 0 0-68.382 31.255-5.873 173.637 23.901 54.441-34.477 76.46-81.039 76.46-8.427 0-16.467-.721-23.562-2.102-17.643-3.434-30.313-18.996-30.313-36.97a82.127 82.127 0 0 1 24.258-58.274l10.733-10.658L256 0l-66.858 154.258 10.733 10.658a82.123 82.123 0 0 1 24.258 58.274c0 17.974-12.67 33.536-30.313 36.97-7.093 1.38-15.138 2.102-23.562 2.102-46.563 0-104.942-22.015-81.039-76.46C151.728 43.42 83.346 12.165 83.346 12.165 67.718 138.416 0 117.171 0 214.911c0 110.848 94.434 131.586 165.092 131.586 23.945 0 45.156-2.381 59.041-4.443v57.073C233.811 394.564 244.61 392 256 392s22.189 2.564 31.867 7.127v-57.073c13.881 2.062 35.103 4.443 59.041 4.443 70.66 0 165.092-20.729 165.092-131.586zM256 422c-24.853 0-45 20.147-45 45v45h90v-45c0-24.853-20.147-45-45-45z" fill="currentColor"/></g></svg>`, // Chakra-like 
  vishnu: `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="18" height="18" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><g data-name="Layer 3"><path d="M200.173 88.5a43.378 43.378 0 0 0-42.54 35.207A84.5 84.5 0 0 1 189 117.676h132.5a85.043 85.043 0 0 1 32.687 6.541A43.376 43.376 0 0 0 311.56 88.5zM221.236 401.064a12.94 12.94 0 0 0 12.924 12.926h18.712l.437-24.146h-22.552c-4.805 0-9.521 5.556-9.521 11.22zM255.614 16c-12.968 0-24.193 9.691-27.043 22.25a73.321 73.321 0 0 1 9.911-.671h35.7a71.976 71.976 0 0 1 8.521.5A27.883 27.883 0 0 0 255.614 16zM274.186 47.578h-35.7c-12.288 0-23.445 3.534-31.414 9.951a33.1 33.1 0 0 0-12.231 21.235 53.777 53.777 0 0 1 5.336-.268H311.56a53.612 53.612 0 0 1 5.463.279c-2.598-16.336-16.123-31.197-42.837-31.197zM209.343 366.92a12.939 12.939 0 0 0 12.925 12.924h31.222l.406-22.437h-35.041a9.523 9.523 0 0 0-9.512 9.513zM232.048 433.5c0 7.287 7.216 11.219 14.006 11.219h6.261l.375-20.731H239.7c-5.642.002-7.652 4.912-7.652 9.512zM198.531 334.481a12.94 12.94 0 0 0 12.924 12.926h42.623l.406-22.439h-46.442a9.523 9.523 0 0 0-9.511 9.513z" fill="currentColor" opacity="1" data-original="#000000" class=""></path><path d="M369.983 145.457a75 75 0 0 0-48.478-17.781H189a74.983 74.983 0 0 0 0 149.966h61.911a94.06 94.06 0 0 0-5.478-14.178 66.708 66.708 0 0 1 60.067-95.726 5 5 0 0 1 0 10 56.709 56.709 0 0 0-51.059 81.376 104.517 104.517 0 0 1 7.739 22.086 4.948 4.948 0 0 1 .154.681 104.542 104.542 0 0 1 2.487 24.564L261.5 489.57a6.218 6.218 0 0 0 2.422 5.148 6.171 6.171 0 0 0 9.864-4.065c2.7-19.96 7.517-49.791 15.14-78.56 9.423-35.566 20.7-60.162 33.533-73.1 2.86-2.886 5.833-5.821 8.98-8.928 34.177-33.74 80.984-79.949 62.255-146.578-4.32-15.387-12.52-28.535-23.711-38.03zM146.293 236.4a5 5 0 0 1-6.476-2.84 85.313 85.313 0 0 1-.805-59.645 5 5 0 1 1 9.41 3.382 75.323 75.323 0 0 0 .71 52.627 5 5 0 0 1-2.839 6.476zm13.317-79.51a74.89 74.89 0 0 0-2.819 3.905 5 5 0 1 1-8.291-5.595 85.866 85.866 0 0 1 3.2-4.425 5 5 0 1 1 7.914 6.112z" fill="currentColor" opacity="1" data-original="#000000" class=""></path><path d="M192.325 287.642a10.587 10.587 0 0 0-10.574 10.576 16.768 16.768 0 0 0 16.75 16.75h56.164l.158-8.705a94.384 94.384 0 0 0-1.523-18.621z" fill="currentColor" opacity="1" data-original="#000000" class=""></path></g></g></svg>`, // Lotus-like
  devi: `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="18" height="18" x="0" y="0" viewBox="0 0 64 64" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="M32 42.653c4.44-5.132 5.636-12.26 5.843-17.431A22.821 22.821 0 0 0 32 8.79a22.823 22.823 0 0 0-5.843 16.432c.207 5.17 1.404 12.3 5.843 17.43z" fill="currentColor" opacity="1" data-original="#000000" class=""></path><path d="M39.415 25.281c-.207 5.151-1.364 12.151-5.517 17.54a11.115 11.115 0 0 0 2.314-.811c10.094-4.46 10.49-13.763 10.5-14.168.24-3.864-.186-10.786 1.315-13.93-4.45.147-8.147 4.498-9.027 5.615a25.895 25.895 0 0 1 .415 5.754z" fill="currentColor" opacity="1" data-original="#000000" class=""></path><path d="M39.524 42.04c12.289-.71 9.878-8.226 16.58-15.128L60 22.79c-3.708-1.236-9.838.662-11.607 1.275l-.11 3.816a18.61 18.61 0 0 1-8.759 14.159zM50.756 38.45a10.826 10.826 0 0 1-3.787 3.303 44.19 44.19 0 0 1 1.958 2.482 18.312 18.312 0 0 0 9.966-4.628l-7.257-2.52c-.258.444-.554.899-.88 1.364zM45.496 42.445a17.696 17.696 0 0 1-4.113 1.018 8.412 8.412 0 0 1-.119 5.379c-.02.05-.04.099-.06.138 4.677 1.582 7.199 1.582 8.316 1.424 1.077-.175.237-2.242-1.582-4.864a45.203 45.203 0 0 0-2.442-3.095zM17.041 41.763a11.415 11.415 0 0 1-4.667-4.657l-7.257 2.531a18.383 18.383 0 0 0 9.956 4.627c.673-.939 1.375-1.8 1.968-2.501zM14.53 37.55c2.22 3.127 6.04 4.316 9.946 4.49a18.61 18.61 0 0 1-8.76-14.159l-.109-3.816c-1.77-.613-7.9-2.521-11.607-1.275 2.195 2.373 5.54 5.546 7.119 8.364 1.278 2.135 2.008 4.502 3.41 6.397z" fill="currentColor" opacity="1" data-original="#000000" class=""></path><path d="m17.16 23.501.128 4.34c.01.406.406 9.71 10.5 14.169a11.122 11.122 0 0 0 2.314.81C24.96 35.754 23.868 26.9 25 19.538c-.86-1.098-4.578-5.478-9.027-5.626a15.207 15.207 0 0 1 1.068 5.389zM36.627 43.542a10.671 10.671 0 0 1-9.244.01 21.984 21.984 0 0 1-3.134.04c-1.684 4.597 1.815 8.997 7.306 11.518a1.06 1.06 0 0 0 .9 0c5.472-2.787 8.915-6.175 7.316-11.508a22.51 22.51 0 0 1-3.144-.06zM22.647 43.453a16.04 16.04 0 0 1-4.123-1.008 41.247 41.247 0 0 0-2.452 3.124c-1.82 2.561-2.076 3.827-2.066 4.36a.549.549 0 0 0 .484.515c1.117.138 3.668.138 8.335-1.464a8.435 8.435 0 0 1-.178-5.527z" fill="currentColor" opacity="1" data-original="#000000" class=""></path></g></svg>`, // Lotus-like
  ganesh: `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="18" height="18" x="0" y="0" viewBox="0 0 32 32" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="M19 5V4a3 3 0 1 0-6 0v1a4 4 0 0 0-4 4v.005c2.011-.652 4.738-.684 7 1.023 2.261-1.708 4.989-1.676 7-1.023V9a4 4 0 0 0-4-4zm-3 3-1.125-1.5L16 5l1.125 1.5z" fill="currentColor" opacity="1" data-original="#000000" class=""></path><path d="M24 27.5s-5.571-.431-6-2.021c-.226-.839-.126-4.592-.051-5.788a.744.744 0 0 1 .743-.691h.022c.429 0 .769.359.744.788-.035.587-.076 1.44-.095 2.331C21.525 20.927 23 18.643 23 16v-5.389c-1.766-.729-4.447-.904-6.497.946a.749.749 0 0 1-1.006 0C13.448 9.706 10.768 9.882 9 10.611V16c0 2.646 1.479 4.933 3.645 6.123a88.279 88.279 0 0 1-.113-2.35.745.745 0 1 1 1.49-.051c.034 1.017.106 2.232.167 2.988h.001c.127 1.575.326 3.081.643 3.957C16.208 30.458 25 30 25 30c-.647-.541-1-1.623-1-2.5zM19 13a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-6 2a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM7.5 16.736c-.671 1.2-1.937 2.146-3.251 2.253a.489.489 0 0 1-.414-.172C2.101 16.727 2.006 10.637 2 7.513c0-.281.236-.514.518-.503 2.25.09 4.048.777 4.982 2.064zM24.5 9.074c.934-1.287 2.732-1.973 4.982-2.063a.503.503 0 0 1 .518.502c-.005 3.123-.101 9.214-1.834 11.304a.489.489 0 0 1-.414.172c-1.314-.108-2.58-1.054-3.251-2.253V9.074z" fill="currentColor" opacity="1" data-original="#000000" class=""></path></g></svg>`, // Ganesha-like silhouette
  surya: `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="18" height="18" x="0" y="0" viewBox="0 0 563.055 563.055" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="M281.527 0c14.135 0 25.593 11.459 25.593 25.593V76.78c0 14.135-11.458 25.593-25.593 25.593s-25.593-11.459-25.593-25.593V25.593C255.934 11.459 267.392 0 281.527 0zM281.527 139.539c-78.414 0-141.982 63.567-141.982 141.983 0 78.413 63.568 141.982 141.982 141.982 78.416 0 141.982-63.569 141.982-141.982 0-78.416-63.566-141.983-141.982-141.983zM119.252 83.052c-9.995-9.995-26.2-9.995-36.194 0-9.995 9.995-9.995 26.2 0 36.195l36.562 36.562c9.995 9.995 26.2 9.995 36.194 0 9.995-9.995 9.995-26.2 0-36.195zM0 281.527c0-14.135 11.459-25.593 25.593-25.593H76.78c14.135 0 25.593 11.458 25.593 25.593S90.915 307.12 76.78 307.12H25.593C11.459 307.121 0 295.663 0 281.527zM155.814 443.436c9.995-9.994 9.995-26.197 0-36.194-9.995-9.994-26.2-9.994-36.194 0l-36.562 36.563c-9.995 9.994-9.995 26.2 0 36.194s26.199 9.994 36.194 0zM281.527 460.681c14.135 0 25.593 11.458 25.593 25.593v51.187c0 14.135-11.458 25.593-25.593 25.593s-25.593-11.458-25.593-25.593v-51.187c0-14.135 11.458-25.593 25.593-25.593zM443.436 407.242c-9.997-9.994-26.2-9.994-36.194 0-9.997 9.997-9.997 26.2 0 36.194l36.56 36.563c9.997 9.994 26.2 9.994 36.194 0 9.997-9.994 9.997-26.2 0-36.194zM460.681 281.527c0-14.135 11.458-25.593 25.593-25.593h51.187c14.135 0 25.593 11.458 25.593 25.593s-11.458 25.593-25.593 25.593h-51.187c-14.135.001-25.593-11.457-25.593-25.593zM479.997 119.246c9.997-9.995 9.997-26.2 0-36.195-9.994-9.995-26.197-9.995-36.194 0l-36.56 36.562c-9.997 9.995-9.997 26.2 0 36.195 9.994 9.995 26.197 9.995 36.194 0z" fill="currentColor" opacity="1" data-original="#000000" class=""></path></g></svg>`, // Sun
  hanuman: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 320" width="18" height="18">

  <!-- Gada Head (Large & rounded) -->
  <ellipse cx="100" cy="85" rx="60" ry="65" fill="currentColor"/>

  <!-- Vertical segments (cutouts using white for shape detailing) -->
  <path d="M100 25 C80 80,80 90,100 145 C120 90,120 80,100 25Z" fill="white"/>
  <path d="M60 85 Q100 60 140 85 Q100 110 60 85Z" fill="white"/>

  <!-- Top Tip -->
  <path d="M100 10 Q90 25 100 35 Q110 25 100 10Z" fill="currentColor"/>

  <!-- Neck Ring -->
  <rect x="70" y="150" width="60" height="18" rx="9" fill="currentColor"/>

  <!-- Handle -->
  <rect x="88" y="165" width="24" height="110" rx="12" fill="currentColor"/>

  <!-- Grip Rings -->
  <rect x="75" y="230" width="50" height="10" rx="5" fill="currentColor"/>
  <rect x="75" y="250" width="50" height="10" rx="5" fill="currentColor"/>

  <!-- Bottom End -->
  <ellipse cx="100" cy="285" rx="18" ry="16" fill="currentColor"/>
  <path d="M100 300 Q90 312 100 315 Q110 312 100 300Z" fill="currentColor"/>

</svg>`, // Mace (Gada) like
  shanti: `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="18" height="18" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><g data-name="43.Kumbh Kalash"><path d="M229.298 165.691a135.843 135.843 0 0 1 5.41 5.117 276.105 276.105 0 0 1 21.294 23.843 275.08 275.08 0 0 1 21.29-23.844 135.726 135.726 0 0 1 5.409-5.115c-6.037-27.815-19.167-50.311-26.65-61.486-7.582 11.174-20.715 33.669-26.753 61.485zM257.03 214.135h78.384c23.835-28.163 32.738-63.09 35.491-77.047a.214.214 0 0 0 .005-.04c-15.87 3.092-55.767 13.49-84.833 42.546a250.316 250.316 0 0 0-29.047 34.541zM242.158 214.135a205.3 205.3 0 0 1 6.128-9.172 260.6 260.6 0 0 0-22.365-25.37c-29.053-29.052-68.957-39.452-84.766-42.575 2.702 14.026 11.626 48.986 35.43 77.117z" fill="currentColor" opacity="1" data-original="#000000"></path><path d="M218.595 156.982c6.937-27.002 19.595-48.59 27.028-59.69a12.491 12.491 0 0 1 20.75-.003c7.435 11.103 20.093 32.692 27.03 59.692a170.902 170.902 0 0 1 33.458-19.124c.05-1.886.074-3.79.074-5.692 0-54.017-45.087-100.965-64.472-118.642a9.54 9.54 0 0 0-12.926-.002c-19.386 17.679-64.474 64.627-64.474 118.645 0 1.898.025 3.799.074 5.684a171.602 171.602 0 0 1 33.458 19.132zM144.768 226.565h222.464a8.89 8.89 0 0 1 8.889 8.89v5.886a8.89 8.89 0 0 1-8.89 8.89H144.769a8.889 8.889 0 0 1-8.889-8.89v-5.887a8.889 8.889 0 0 1 8.889-8.889z" fill="currentColor" opacity="1" data-original="#000000"></path><rect width="183.558" height="22.975" x="164.221" y="478.025" rx="8.465" fill="currentColor" opacity="1" data-original="#000000"></rect><path d="m398.094 317.028-48.607-54.372H162.513l-48.607 54.372a70.612 70.612 0 0 0 0 94.198l27.536 30.803a70.747 70.747 0 0 0 52.686 23.57h123.744a70.747 70.747 0 0 0 52.686-23.57l27.536-30.803a70.612 70.612 0 0 0 0-94.198zm-177.116 15.45a6.213 6.213 0 0 1 12.426 0v.25a6.213 6.213 0 0 1-12.426 0zm70.132 60.31a6.213 6.213 0 0 1-12.426 0v-.248a6.213 6.213 0 0 1 12.426 0zm-28.897-82.48v44.013h50.226a6.213 6.213 0 0 1 6.213 6.213v56.439a6.213 6.213 0 0 1-12.426 0v-50.226h-44.013v50.226a6.213 6.213 0 0 1-6.213 6.213h-56.439a6.213 6.213 0 1 1 0-12.426h50.226v-44.013h-50.226a6.213 6.213 0 0 1-6.213-6.212v-56.44a6.213 6.213 0 1 1 12.426 0v50.227h44.013v-50.226a6.213 6.213 0 0 1 6.213-6.213h56.439a6.213 6.213 0 0 1 0 12.426zm28.897 22.17v.25a6.213 6.213 0 0 1-12.426 0v-.25a6.213 6.213 0 0 1 12.426 0zm-70.132 60.31v-.248a6.213 6.213 0 0 1 12.426 0v.25a6.213 6.213 0 0 1-12.426 0z" fill="currentColor" opacity="1" data-original="#000000"></path><path d="M249.787 354.322h12.426v12.426h-12.426z" fill="currentColor" opacity="1" data-original="#000000"></path></g></g></svg>`, // Om/Shanti vibe
  sanskar: `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="18" height="18" x="0" y="0" viewBox="0 0 48 48" style="enable-background:new 0 0 512 512" xml:space="preserve"><g><g data-name="Namaste hand"><path d="M21 19a2 2 0 0 0-2 2v6a1 1 0 0 1-2 0v-6a4 4 0 0 1 4.21-4c.1-.1 0 .13 1.51-13.52a2.24 2.24 0 0 0-4.29-1.1l-5.54 13.47c-1.19 2.83-.77 4 0 15.78a2 2 0 0 1-1.16 1.95L0 39l11 8 9.84-8.2C23.63 36.48 23 34.94 23 21a2 2 0 0 0-2-2ZM36.25 33.58a2 2 0 0 1-1.16-1.95l.76-11.31c.2-3.07-.35-3.52-6.28-17.93a2.23 2.23 0 0 0-4.3.84c0 .1 1.42 13.68 1.52 13.78A4 4 0 0 1 31 21v6a1 1 0 0 1-2 0v-6a2 2 0 0 0-3.41-1.41c-.82.79-.59.38-.59 14.6a6 6 0 0 0 2.16 4.61L37 47l11-8Z" fill="currentColor" opacity="1" data-original="#000000"></path></g></g></svg>` // The Kalash
};
  
var D=[
{id:'bhagwanShiv',title:'Bhagwan Shiv',icon:ICONS.shiv,services:[
{name:'Rudra Abhishek',img:'image/RudraAbhishek.webp',desc:'A powerful Vedic ritual dedicated to Lord Shiva involving the sacred bathing of the Shiva Lingam with milk, honey, curd, and holy water while chanting Rudra mantras for divine blessings.',benefits:['Removes negative energies and doshas','Brings inner peace and spiritual growth','Promotes health and prosperity','Strengthens mental resilience']},
{name:'Rudri',img:'image/Rudri.webp',desc:'The complete recitation of Sri Rudram from the Yajurveda, performed to invoke Lord Shiva\'s grace. This chanting purifies the atmosphere and bestows spiritual strength upon devotees.',benefits:['Purifies mind, body, and surroundings','Invokes divine protection','Alleviates karmic burdens','Enhances spiritual awareness']},
{name:'Laghu Rudra',img:'image/LaghuRudra.webp',desc:'An elaborate poojan involving eleven recitations of Sri Rudram, amplifying the spiritual benefits manifold. Ideal for significant life milestones and overcoming major obstacles.',benefits:['Multiplied spiritual merit','Effective remedy for planetary afflictions','Brings success in endeavors','Promotes family harmony']},
{name:'Maha Rudra',img:'image/MahaRudra.webp',desc:'The grandest form of Rudra worship comprising 1,331 recitations of Sri Rudram by multiple priests over several days, creating an immensely powerful spiritual vibration.',benefits:['Supreme divine blessings','Deep karmic cleansing','Protection from severe afflictions','Brings lasting peace and abundance']},
{name:'Bilva Patra Archana',img:'image/BilvaPatraArchana.webp',desc:'A devotional offering of sacred Bilva (Bael) leaves to Lord Shiva, each leaf representing surrender and devotion. This ritual is especially auspicious during Shravan and Mahashivratri.',benefits:['Fulfills heartfelt wishes','Deepens devotion to Lord Shiva','Removes sins and negative karma','Brings mental clarity and focus']}
]},
{id:'bhagwanVishnu',title:'Bhagwan Vishnu',icon:ICONS.vishnu,services:[
{name:'Purusha Suktam',img:'image/PurushaSuktam.webp',desc:'A sacred Vedic hymn from the Rigveda glorifying Lord Vishnu as the cosmic being. Its recitation invokes universal harmony and divine consciousness.',benefits:['Invokes cosmic blessings','Promotes universal harmony','Enhances spiritual consciousness','Brings prosperity and well-being']},
{name:'Tulsi Akshatam Pushpa Archana',img:'image/TulsiAkshatamPushpaArchana.webp',desc:'A devotional offering of sacred Tulsi leaves, Akshat (rice grains), and flowers to Lord Vishnu, symbolizing purity, devotion, and surrender.',benefits:['Pleases Lord Vishnu immensely','Purifies the home environment','Attracts positive vibrations','Strengthens family bonds']},
{name:'Shatanama Archana',img:'image/ShatanamaArchana.webp',desc:'Worship through the chanting of 100 divine names of Lord Vishnu, each name invoking a specific aspect of the Lord\'s grace and protection.',benefits:['Invokes multi-faceted divine blessings','Removes obstacles in life','Promotes peace of mind','Strengthens devotional practice']},
{name:'Sahasranama Archana',img:'image/SahasranamaArchana.webp',desc:'The grand recitation of 1,000 names of Lord Vishnu from the Vishnu Sahasranama, one of the most revered prayers in Hindu tradition.',benefits:['Supreme spiritual merit','Protection from all negativities','Fulfillment of righteous desires','Attainment of moksha']},
{name:'Vishnu Yagna',img:'image/VishnuYagna.webp',desc:'A sacred fire ceremony dedicated to Lord Vishnu, involving offerings of ghee and herbs into the consecrated fire while chanting Vishnu mantras.',benefits:['Purifies environment and karma','Invokes Lord Vishnu\'s protection','Brings material and spiritual success','Removes Vastu doshas']},
{name:'Satyanarayan Katha',img:'image/SatyanarayanKatha.webp',desc:'A beloved devotional narrative and poojan honoring Lord Satyanarayan (Vishnu), traditionally performed during auspicious occasions, new beginnings, and festivals.',benefits:['Brings prosperity and happiness','Removes hardships and sorrows','Ideal for housewarmings and celebrations','Strengthens faith and gratitude']},
{name:'Nrusimha Poojan',img:'image/NrusimhaPoojan.webp',desc:'Worship of Lord Narasimha, the fierce avatar of Vishnu, performed for powerful protection against enemies, evil forces, and insurmountable difficulties.',benefits:['Powerful protection from enemies','Removes deep-rooted fears','Bestows courage and strength','Overcomes legal and personal battles']},
{name:'Varaha Poojan',img:'image/VarahaPoojan.webp',desc:'Devotional worship of Lord Varaha, the boar avatar of Vishnu who rescued the Earth. This poojan is performed for stability, grounding, and property-related blessings.',benefits:['Blessings for land and property','Brings stability in life','Removes obstacles in real estate matters','Promotes groundedness and security']},
{name:'Shree Ram Poojan',img:'image/ShreeRamPoojan.webp',desc:'Sacred worship of Lord Rama, the embodiment of dharma and righteousness. This poojan invokes the virtues of truth, duty, and noble conduct.',benefits:['Inspires righteous living','Brings harmony in relationships','Bestows courage and moral strength','Removes family conflicts']},
{name:'Shree Krishna Poojan',img:'image/ShreeKrishnaPoojan.webp',desc:'Devotional worship of Lord Krishna, the divine strategist and embodiment of love. This poojan invokes wisdom, joy, and divine guidance in all aspects of life.',benefits:['Attracts divine love and joy','Enhances wisdom and intellect','Removes confusion and doubt','Brings success in endeavors']},
{name:'Hayagriva Poojan',img:'image/HayagrivaPoojan.webp',desc:'Worship of Lord Hayagriva, the horse-headed avatar of Vishnu and deity of knowledge and wisdom. Especially beneficial for students and scholars.',benefits:['Enhances learning and memory','Bestows academic excellence','Removes ignorance','Ideal for students and educators']}
]},
{id:'deviPoojan',title:'Devi Poojan',icon:ICONS.devi,services:[
{name:'Chandi Paath',img:'image/ChandiPaath.webp',desc:'The sacred recitation of Durga Saptashati (700 verses) glorifying Goddess Durga\'s victories over evil forces. A powerful ritual for divine feminine protection.',benefits:['Invokes Goddess Durga\'s protection','Destroys negative energies','Empowers courage and determination','Brings victory over adversaries']},
{name:'Nava Chandi',img:'image/NavaChandi.webp',desc:'Nine consecutive recitations of the Durga Saptashati, performed by multiple priests to amplify the divine energy of Goddess Chandi manifold.',benefits:['Ninefold spiritual power','Removes severe obstacles','Brings miraculous transformations','Deep karmic purification']},
{name:'Shata Chandi',img:'image/ShataChandi.webp',desc:'One hundred recitations of the Durga Saptashati, an extraordinarily powerful ritual performed over several days for the most challenging life situations.',benefits:['Hundredfold divine blessings','Overcomes impossible obstacles','Massive spiritual purification','Attracts supreme divine grace']},
{name:'Sahasra Chandi',img:'image/SahasraChandi.webp',desc:'The grand performance of one thousand recitations of the Durga Saptashati, the ultimate expression of devotion to the Divine Mother.',benefits:['Thousand-fold spiritual merit','Rarest and most powerful ritual','Complete transformation of destiny','Ultimate divine protection']},
{name:'Archana',img:'image/Archana.webp',desc:'A personalized worship offering flowers and sacred items to the Goddess while chanting her divine names, invoking her specific blessings for the devotee.',benefits:['Personalized divine blessings','Fulfills specific wishes','Deepens devotional connection','Brings peace and contentment']},
{name:'Lalita Devi Poojan',img:'image/LalitaDeviPoojan.webp',desc:'Worship of Goddess Lalita Tripurasundari, the supreme form of the Divine Mother representing beauty, grace, and cosmic power.',benefits:['Bestows beauty and grace','Attracts harmonious relationships','Enhances creative abilities','Brings spiritual enlightenment']}
]},
{id:'ganeshPoojan',title:'Shree Ganesh Poojan',icon:ICONS.ganesh,services:[
{name:'Ganapati Atharva Shirsha',img:'image/GanapatiAtharvaShirsha.webp',desc:'A sacred Upanishadic hymn dedicated to Lord Ganesha, revealing his supreme cosmic nature. Its recitation removes all obstacles and bestows wisdom.',benefits:['Removes all obstacles','Bestows supreme wisdom','Brings auspicious beginnings','Grants success in all ventures']},
{name:'Archana',img:'image/Archana3.webp',desc:'A devotional offering to Lord Ganesha with flowers, durva grass, and modak while chanting his sacred names, seeking his blessings for success.',benefits:['Pleases Lord Ganesha','Removes hurdles in projects','Brings intellectual clarity','Attracts prosperity']},
{name:'Ganesh Yagna',img:'image/GaneshYagna.webp',desc:'A sacred fire ceremony dedicated to Lord Ganesha, invoking his blessings through Vedic fire offerings for the removal of obstacles and new beginnings.',benefits:['Purifies surroundings','Powerful obstacle removal','Ideal for new ventures','Brings divine protection']},
{name:'Ganesh Jap',img:'image/GaneshJap.webp',desc:'The dedicated repetition of Ganesha mantras (such as Om Gam Ganapataye Namaha) performed with focused devotion for specific intentions and blessings.',benefits:['Deep meditative benefits','Strengthens willpower','Enhances focus and concentration','Removes fear and anxiety']}
]},
{id:'suryaPoojan',title:'Surya Poojan',icon:ICONS.surya,services:[
{name:'Surya Poojan',img:'image/SuryaPoojan.webp',desc:'Sacred worship of Lord Surya (the Sun God), the source of all life energy. This poojan involves Arghya (water offering) and Vedic mantras to invoke vitality, health, and leadership qualities.',benefits:['Boosts vitality and health','Enhances leadership qualities','Remedies for Surya-related doshas','Brings fame and recognition']}
]},
{id:'hanumanPoojan',title:'Hanuman Poojan',icon:ICONS.hanuman,services:[
{name:'Hanuman Poojan',img:'image/HanumanPoojan.webp',desc:'Devotional worship of Lord Hanuman, the supreme devotee of Lord Rama and embodiment of strength, courage, and unwavering devotion. This poojan is performed for protection, physical strength, and overcoming fear.',benefits:['Bestows immense courage and strength','Powerful protection from evil','Removes fear and anxiety','Enhances physical and mental endurance']}
]},
{id:'shantiKarma',title:'Shanti Karma',icon:ICONS.shanti,services:[
{name:'Graha Shanti',img:'image/GrahaShanti.webp',desc:'A specialized Vedic ritual to pacify malefic planetary influences in one\'s horoscope. Performed with specific mantras and offerings for each planet to restore cosmic balance.',benefits:['Neutralizes negative planetary effects','Improves overall life circumstances','Enhances favorable planetary periods','Restores astrological balance']},
{name:'Kal Sarpa Shanti',img:'image/KalSarpaShanti.webp',desc:'A powerful ritual to mitigate the effects of Kal Sarpa Dosha, which occurs when all planets are hemmed between Rahu and Ketu in the birth chart.',benefits:['Mitigates Kal Sarpa Dosha effects','Removes delays and obstacles','Restores career and financial growth','Brings mental peace']},
{name:'Nakshatra Shanti',img:'image/NakshatraShanti.webp',desc:'A pacification ritual performed for one\'s birth Nakshatra (lunar constellation) to harmonize its energies and enhance its positive influences in life.',benefits:['Harmonizes birth star energies','Enhances positive life influences','Improves health and relationships','Brings alignment with cosmic rhythms']},
{name:'Kumbh Vivah',img:'image/KumbhVivah.webp',desc:'A sacred ceremonial marriage performed with a pot (Kumbh) or tree as a remedial ritual for specific astrological doshas, particularly Manglik Dosha.',benefits:['Remedies Manglik Dosha','Removes marriage-related obstacles','Ensures marital harmony','Protects spouse from negative effects']},
{name:'Ark Vivah',img:'image/ArkVivah.webp',desc:'A ceremonial marriage performed with an Ark (Calotropis) plant as part of astrological remediation, typically for Manglik Dosha before actual marriage.',benefits:['Nullifies Manglik Dosha effects','Paves way for successful marriage','Removes astrological impediments','Brings peace of mind to families']},
{name:'Udaka Shanti',img:'image/UdakaShanti.webp',desc:'A purification ritual involving the sanctification of water with Vedic mantras, used for spiritual cleansing of individuals, homes, and spaces.',benefits:['Complete spiritual purification','Cleanses home and environment','Removes negative vibrations','Brings freshness and positivity']},
{name:'Graha Mantra Jap',img:'image/GrahaMantraJap.webp',desc:'The dedicated chanting of specific planetary mantras to strengthen weak planets or pacify malefic ones in the horoscope, performed with focused devotion and ritual precision.',benefits:['Strengthens weak planetary positions','Pacifies malefic influences','Enhances favorable planetary results','Improves specific life areas']}
]},
{id:'sanskar',title:'Sanskar',icon:ICONS.sanskar,services:[
{name:'Garbha Dhanam',img:'image/GarbhaDhanam.webp',desc:'The first of the sixteen Vedic Sanskars, performed for the sanctification of conception. This sacred ritual invokes divine blessings for a healthy and virtuous progeny.',benefits:['Blesses the conception process','Invokes healthy progeny','Purifies the womb environment','Spiritual foundation for new life']},
{name:'Punsavan Sanskar',img:'image/PunsavanSanskar.webp',desc:'A prenatal Sanskar performed during the early months of pregnancy to ensure the healthy development of the fetus and invoke blessings for a strong, virtuous child.',benefits:['Promotes healthy fetal development','Invokes blessings for the child','Protects mother and baby','Strengthens the spiritual bond']},
{name:'Seemant Sanskar',img:'image/SeemantSanskar.webp',desc:'A sacred ceremony performed during the later months of pregnancy to bless the expectant mother, ensure safe delivery, and protect both mother and child.',benefits:['Blesses expectant mother','Ensures safe delivery','Removes pregnancy-related fears','Celebrates the joy of motherhood']},
{name:'Jatak Karma',img:'image/JatakKarma.webp',desc:'The birth ceremony performed immediately after the child is born, welcoming the newborn into the world with sacred mantras, honey-touching, and parental blessings.',benefits:['Sacred welcome for the newborn','Invokes lifelong divine protection','Establishes spiritual foundation','Strengthens parent-child bond']},
{name:'Naamkaran Sanskar',img:'image/NaamkaranSanskar.webp',desc:'The sacred naming ceremony where the child receives their name based on astrological calculations, family traditions, and divine guidance through Vedic rituals.',benefits:['Astrologically aligned naming','Establishes child\'s identity','Invokes blessings of ancestors','Celebrated community event']},
{name:'Anna Prashanam',img:'image/AnnaPrashanam.webp',desc:'The first-feeding ceremony where the child is introduced to solid food for the first time, performed with Vedic rituals to bless the child with good health and nourishment.',benefits:['Blesses the child\'s nutrition','Marks important developmental milestone','Invokes health and vitality','Joyful family celebration']}
]}
];

// Render tabs and content
var tabsNav=document.getElementById('kkTabsNav');
var tabContent=document.getElementById('kkTabContent');
var sectionToScroll = document.getElementById('karmakandSection');

D.forEach(function(cat,i){
  // Tab button
  var li=document.createElement('li');
  li.className='nav-item';
  li.setAttribute('role','presentation');
  var btn=document.createElement('button');
  btn.className='nav-link'+(i===0?' active':'');
  btn.id=cat.id+'-tab';
  btn.setAttribute('data-bs-toggle','pill');
  btn.setAttribute('data-bs-target','#'+cat.id);
  btn.setAttribute('type','button');
  btn.setAttribute('role','tab');
  btn.setAttribute('aria-controls',cat.id);
  btn.setAttribute('aria-selected',i===0?'true':'false');
  btn.innerHTML=cat.icon + ' ' + cat.title;
  li.appendChild(btn);
  tabsNav.appendChild(li);

  // Tab pane
  var pane=document.createElement('div');
  pane.className='tab-pane fade'+(i===0?' show active':'');
  pane.id=cat.id;
  pane.setAttribute('role','tabpanel');
  pane.setAttribute('aria-labelledby',cat.id+'-tab');
  pane.setAttribute('tabindex','0');

  cat.services.forEach(function(svc,j){
    var block=document.createElement('div');
    block.className='kk-sub-service';
    var isEven=(j%2===1);
    block.innerHTML=
      '<div class="row'+(isEven?' flex-row-reverse':'')+'">'+
        '<div class="col-md-5">'+
          '<img loading="lazy" src="'+svc.img+'" alt="'+svc.name+'">'+
        '</div>'+
        '<div class="col-md-7">'+
          '<h3 class="therdH">'+svc.name+'</h3>'+
          '<p>'+svc.desc+'</p>'+
          '<h4 class="fourthH">Benefits</h4>'+
          '<ul class="ulStyles">'+svc.benefits.map(function(b){return '<li>'+b+'</li>';}).join('')+'</ul>'+
          '<button type="button" class="kk-inquiry-btn" data-bs-toggle="modal" data-bs-target="#inquiryModal" data-service="'+svc.name+'"><i class="fa-solid fa-envelope"></i> Quick Inquiry</button>'+
        '</div>'+
      '</div>';
    pane.appendChild(block);
  });

  tabContent.appendChild(pane);
});

// Pre-fill subject when inquiry modal opens
document.getElementById('inquiryModal').addEventListener('show.bs.modal',function(e){
  var trigger=e.relatedTarget;
  if(trigger){
    var svc=trigger.getAttribute('data-service');
    if(svc){document.getElementById('validationSubject').value='Inquiry about '+svc;}
  }
});

// Tab click functionality: Scroll to section and handle mobile scroll
tabsNav.addEventListener('click',function(e){
  var btn=e.target.closest('.nav-link');
  if(btn){
    // Scroll tab button into view horizontally on mobile
    btn.scrollIntoView({behavior:'smooth',block:'nearest',inline:'center'});
    
    // Scroll page to the start of the section for better UX
    if(sectionToScroll){
        const offset = 100; // Account for sticky header
        const elementPosition = sectionToScroll.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
  }
});
})();
