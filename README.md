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
- 新しいタスクの追加
- 既存のタスクの更新
- タスクの削除
