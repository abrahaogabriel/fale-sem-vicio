#!/bin/bash

echo "🚀 Iniciando build da imagem Docker..."

# Build da imagem com a tag 'latest'
docker build -t fale_sem_vicio:latest .

echo "✅ Build finalizado com sucesso!"
