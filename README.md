# React Native & Redux基礎範例
此範例實作一個簡易抽獎APP，分抽獎與設定兩頁面，由設定頁完成抽獎範圍後，透過Redux再從抽獎頁去呈現抽獎狀態。

# React Native 起手式
### 基本要求
* [NodeJS](https://nodejs.org/) = 16.13.0
* [cocoapods](https://cocoapods.org/)  iOS套件管理器
* 選擇自己喜歡的編輯器 ，此範例都是使用[VS Code](https://code.visualstudio.com/)
* React Native版本0.66.1

### 使用技術

**React Native**

* [React Native官方教學](https://reactnative.dev/docs/environment-setup) 

### 初始化
初次使用，務必使用terminal安裝
```
brew install watchman
```
Watchman 是來自 Facebook 的檔案監控工具。 React Native 利用 Watchman 來偵測程式碼的變化，以便重新建構。
watchman安裝完後，在執行
```
npm install -g react-native-cli
```

使用 terminal 到專案底下，然後輸入：
```
npm install
```

如果要使用iOS模擬器監看，輸入：
```
cd ios
```

再輸入來安裝iOS相關套件：
```
pod install
```
安裝完畢後就退回到專案根目錄

### 執行專案

使用 terminal 到專案底下，然後輸入：

```
npx react-native start
```

接著再開啟另一個 terminal 到專案底下，然後輸入：
```
npx react-native run-ios
```
