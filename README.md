# todo-app

このプロジェクトは、Node.js、Express、React、および MongoDB を使用して構築されたタスク管理アプリケーションである

## 前提技術

- Docker
- Docker Compose

## セットアップ手順

1. リポジトリをクローン:

   ```sh
   git clone git@github.com:MotokiRyuki/todo-app.git
   cd todo-app
   ```

2. アプリケーションをビルドして起動:

   ```sh
   バックエンド
   cd backend
   npm install
   ```

   ```sh
   フロントエンド
   cd frontend
   npm install
   ```

3. アプリケーションをビルドして起動:

   ```sh
   docker-compose up --build
   ```

4. アプリケーションにアクセス:

   - バックエンド: http://localhost:3000
   - フロントエンド: http://localhost:3001

## 機能

- タスクの一覧表示
- タスクの作成
- 既存のタスクの未達状況
- タスクの削除

##　操作方法

フロントエンドに飛ぶとトップページが表示される。テキストボックスに適当な値を入力し、「作成」ボタンを押すと下にタスクが追加されていく。作成したタスクが完了した場合は「完了」ボタンを押す。また、完了していなかった場合は「完了」ボタンが「未完了」ボタンに変化しているので押す。タスクを削除したい場合は「削除」ボタンを押すとタスクが削除される。
