## Criando ambiente de api simulada.
#### Dependências a serem instaladas:

- npm install json-server

#### Conceito do que é o formato json:

```json
{
    "aluno": {
        "id": 1,
        "nome": "Geraldo",
        "nascimento": "02/03/1979"
    }
}
```
```json
{
    "produtos": [],
    "clientes": [],
    "fornecedores": [],
    "pedidos": []
}
```
#### Configurar o package.json
Por ser um ambiente local a linha test deve ser alterada para:
```json
"test": "json-server db.json --port 5173"
```
Subir o serviço:
```bash
npm run test
```

