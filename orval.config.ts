module.exports = {
    'petstore-file': {
        input: '../api_doc_explorations/priv/static/openapi.json',
        output: {
            target: './src/api-doc-explorations.ts',
            baseUrl: "http://localhost:4000"
        }
    }
}