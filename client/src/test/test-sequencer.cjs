class CustomTestSequencer {
    sort(tests) {
      const testOrder = [
        '00TestLogin.test.js',
        '000testSignUp.test.js',
        '01TestAddMatch.test.js',
        '02TestUploadVideo.test.js',
        '03TestDownloadVideo.test.js',
        '04TestUploadJson.test.js',
        '05TestDeleteVideo.test.js',
        '06TestSearchMatch.test.js',
        '07TestSearchVideo.test.js',
        '08TestDeleteMatch.test.js',
        '09TestAddVideo.test.js',
        '010TestLogout.test.js',
      ];
  
      const orderedTests = tests.sort((a, b) => {
        const aIndex = testOrder.indexOf(a.path);
        const bIndex = testOrder.indexOf(b.path);
        return aIndex - bIndex;
      });
  
      return orderedTests;
    }
  }
  
  module.exports = CustomTestSequencer;