const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'PRINCE-MDX!H4sIAAAAAAAAA5VUy46jRhT9lai2WGPAYMBSS8EY2/iFwW9HsyhDgTG4wFUFBo96M1K22cwHZJFllGV+IR+S5azyCRHu7ulZJJMOq+LW1b3nnnNufQA4jSgaowp0PoCMRAVkqD6yKkOgA7p5ECACGsCHDIIOsHXr2kucvXCbB901daOCX6LerLzsi2nq7zas3w6lc+jaovUAHhsgyw9J5H2jYNHX1oeeTHa2Zq8EbJVZ1xQVrXdaT5Qdt90j9zAaGgNVPoUP4LGuCCMS4dDMjuiMCEzGqJrDiLwN/kI3mBGUtpYbfJlFsW91Vcvmw/F8r9CNIEJ+ywI8vWKsvw3+TIWkWOpiIQ0deTnf+xuWe107vnJ2UgjX0FBnmTPv6VchfoJPoxAj3/IRZhGr3sz7YDxJ4VAbLE+bDZVtF4XagSXT9FYmAcZGXjUv4c3it9x6+jbgJ8lZtavLGM44dXZr98P2ar3SsWtWlibZKjSNk3d2pPAQ618Dn5MXr8T/h/dIn4pthZWhyXjLG0zYYmh5y2A/LOc3vtm8LUmTv6EyV/rXt8GXDfkg+Ia/HnM+tVo7r5QcpOwIs3w6mbqF4zF+PiZ+eg1f4UOWk2+hDI5bakhObEO9kHpbU+WcKdcivW6/yZxst7nG02E+kQ7SJaAac2fX82ZWHYoRM5VWeV1HZU8eu+pROToHD9MFnUFrFF4f7hPFqLJ80BEeG4CgMKKMQBaluI6JYrsBoF8skEcQu9MLnJHSPC/W0yhZ73bOHuv9VJu4PjcJZH47uGz1lrk1TgvVn4YPoAEyknqIUuQPI8pSUk0RpTBEFHR+eN8AGJXsSbi6XUtogCAilK1wniUp9F9UfbmEnpfmmC0q7Bn1ARHQ4V/DiLEIh7TmMceQeMeoQMYRMgo6AUwo+jIhIsgHHUZy9GVrjdSviW/PeNPlWyPQAOe7IJEPOkCU24okqgIvanxHFL6n7651WZhl7zBioAGSe5qqyYrIK5qqqGK7VSfW8QbAsK4F/vjp86ff//zx4+dPv33318+//lKT/wy97uQjBqOEgg4wJvObIqWGOR70SpUfDHQ+1I1QB6+jvnjmSRNR5XhVwqd2Xp2aApLc3qbcuI64jXcrdynSrVWcebYJ9hvv4R+KgA5ws+aZ0yRZ4s3teHDk9vh0pgNbcy55l95SOR9DeSVMenMHxfE8uc3iY0DxilsZ2nmY2qZ0cvfr82q/Cdyjzy3oyB7d9NpgDeCjIvLQ1836PtTiw+HSDKUdh8bZZXzsNkt+xIuuyZNFEpfkcDomw6artrfZSb86SDKDw+nQo3xpH7UdV6hdP8R5LDPBmVZaseRD58nN921Knl+x6O6zWsT6N4jQ/VF4luM/RX0CXnuPf2x8VeP5mfmXVe36xZzN7ZHEEZo2tW1uOgJdx6tZIg/65koj/Wois8kai2sMHh/fN0CWQBak5Aw6AGKfpHfPkDSvzWzhIP1GM0PnLUMPF/XkCaRMf12QZXRGlMFzBjqCorREWRFa4lPWnKTZENJjTcJc2B2D2u2VnmULBtnLvgG9/uy1AB7/BsJ4etCLBwAA', // 👈👈paste your session id here
    PORT: process.env.PORT || 8000,
    SESSION_NAME: process.env.SESSION_NAME || "auth_info_baileys"
};
