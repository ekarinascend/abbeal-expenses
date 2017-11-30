import Config from 'react-native-config';

const config = {
  iosClientId: Config.GOOGLE_IOS_CLIENT_ID,
  visionApiToken: Config.VISION_API_TOKEN,
};

export default Object.freeze({ ...config });
