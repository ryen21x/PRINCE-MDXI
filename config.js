const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'PRINCE-MDX!H4sIAAAAAAAAA5VUy7KqRhT9l55qXRsBRatOVRAVfKCgR1BTd9BCAy1P6QbEW05SlWkm9zsyzC/kQzK8X5HiPG+lKjcnjJp+7L32WmvvLyBJCcULXIPhF5DlpEQMN0tWZxgMwajwPJyDNnARQ2AIJKN2PIceCNx0Z4bVPZsDWdtcvWAe25WMxMfWeK8f9qS0pQdwb4OsOEXE+UFAmKBVj5WtfD0twltkOS6dpnopFwIdUaYlcWs+Ke1tednuHsC9iYhIThJ/kgU4xjmKFrg2EMk/Bl8YrQd2KCgdZXNwoshS9WncE5KJWsgknrvrRNdhFuT2EYYfgy/0FrG5sQUjCAJ81ue47lrnygp3Yqyq3uaocFy0GTHFhPQZPiV+gt2ZixNGWP1h3mstN5F5s1rxWHejTd4Jp535tXIdbzcWJ37Zhbaot1R/PIUfA0598dhnogoD6XJcW7dqFXshWfb4WOoZkxoeB8xMxiRvaen3wI381Svh/+H9Ik/0ySQO1oubUpCeFRt1V0v2Vu5v4cleRD5iJ/F4ukHtg7ZR5MBXp5WnFIZxiwYTeWVVgn/a3w7+Jl32scDIpbXSVmkA3+EjVuQ/QukdcWmbj9SSzuhaXGWoDg6kLBdnF1/SQc3Bc8+YK+66tanNjR1ep7HPF5W3mGRi3Gnha72xe72K56TFo64s3CxiF2tUPTxVFOJ65oIhd2+DHPuEshwxkibNntAGyC232MkxeyIX8Os98uQ1rTYohGQ9ndfVMtg4Zy1wLs4Sd4rboCgryWztzAfQBlmeOphS7GqEsjSvdUwp8jEFw58/t0GCr+xZtiYZz7WBR3LKdkmRRSlyXzV9PUSOkxYJ29aJozQLnIMhfN/GjJHEpw2LRYJyJyAlVgLEKBh6KKL4rT6cYxcMWV7gt55VUrehfdu34creS6AN4ic5iAuGoCv2+j2eE6HQHQw57if6qWrCoiz7lGAG2iBBzW3w52/fvv7x16+/fPv6O2iD6OUtHIii2O3xYh/ysHneHNzfYDdZXMwQiWhjHl3dV7qvTvRleqVQVeXUlxVfBu9lvrrlWY/Roe+Mr4p92d2MVXiIT+i6DOzU6O53kl9qnvc4iJbJBTrJkx7/DAKGQC347s0VA6II82N+UZgzT6B6CQPeMLQ45+IlPcnyNF5EmjDhj0I3g2mqmMgJlxxHpqV0xcH+NgtHazKV+AMprutSMR+abC4uiYO/T9biSDTml2Gx6xgFMc+4MtljSqRTdErKQ2vQat1iW5933GwjJUkv47HhsiC8eqPZPtMGNEjSZdqRijlNy20Iy9iKmCI/+/ipj6KX+UWePNYI2Px6BD+Ngxeh/lPQZ+CN7+C9/V2MlwHzL006Mu01L0tmdIn02+2ozuMu3QrWZTyIOGO2vPI87By3Yo9pcwju989tkEWIeWkeN1MvPiHQBnlaNC6eJV76wxkDZxPfnzVlR4gy+b0zHkmMKUNxBoZcv893Rb4PpedbRp5mGqJBw4AqyHHR2LyWs2zLEHttNCA334KbgvvfW94N2oIHAAA=', // 👈👈paste your session id here
    PORT: process.env.PORT || 8000,
    SESSION_NAME: process.env.SESSION_NAME || "auth_info_baileys"
};
