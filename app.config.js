import 'dotenv/config';

export default {
  expo: {
    name: "Getukan",
    slug: "getukan",
    version: "3.0.0",
    description: "Getukan is a new way to find getuk store near you",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    userInterfaceStyle: "automatic",
    splash: {
      image: "./assets/images/icon.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.getukan.app",
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/icon.png",
        backgroundColor: "#ffffff",
      },
      package: "com.getukan.app",
      versionCode: 3,
      permissions: [
        "android.permission.READ_EXTERNAL_STORAGE",
        "android.permission.WRITE_EXTERNAL_STORAGE",
        "android.permission.CAMERA",
        "android.permission.RECORD_AUDIO"
      ]
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    plugins: [
      ["expo-image-picker", {
        photosPermission: "Let Getukan access your photos to upload image",
        permissions: [
          "CAMERA",
          "READ_EXTERNAL_STORAGE",
          "WRITE_EXTERNAL_STORAGE"
        ]
      }]
    ],
    extra: {
      firebase: {
        apiKey: process.env.FIREBASE_API_KEY || "",
        authDomain: process.env.FIREBASE_AUTH_DOMAIN || "",
        projectId: process.env.FIREBASE_PROJECT_ID || "",
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET || "",
        messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || "",
        appId: process.env.FIREBASE_APP_ID || "",
        measurementId: process.env.FIREBASE_MEASUREMENT_ID || ""
      },
      eas: {
        projectId: "7b1518c4-a747-4ce7-93f3-38fd294d4ec8"
      }
    }
  }
}