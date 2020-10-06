# vue-firebase-app

## 関連技術
- Vue.js (2.x)
- Firebase Authentication
- Firestore

## セットアップ
### モジュールのインストール
```
npm install
```

### 開発用サーバーの起動
```
npm run serve
```
コマンド入力後、アドレスバーに `localhost:3000` と入力する

### アプリケーションのビルド
```
npm run build
```

## Firebase へのデプロイ
### Firebase プロジェクトの作成
`src/firebase/firebase.ts` 以下の firebase configuration を自身のプロジェクトのものに更新する
  
### Firebase CLI のインストール
https://firebase.google.com/docs/cli?hl=ja へアクセスし、
環境に応じた CLI をインストールする。
  
### Firebase Hosting へデプロイ
```
firebase deploy --only hosting --project=PROJECT_NAME
```

## Firebase Authentication の設定
Firebase Console から `Authentication` を選択し、
`Sign-in method` から **メール/パスワード** を有効化する。

## Firestore の設定
Firebase Console から **データベースを作成** を選択する。
  
※ Firestore Rules は初期状態では全てのデータの閲覧が行えるため、
重要な情報は保存しないこと。
