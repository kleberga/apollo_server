const Mutation = {
    createAtracao: (_, args, context) => {
        const  novaAtracao  = args.Atracoes;
        const { atracoes } = context;
        const maxId = atracoes.reduce((max, obj) => (obj.id > max ? obj.id : max), atracoes[0].id);
        novaAtracao.id = maxId + 1;
        atracoes.push(novaAtracao);
        console.log(atracoes)
        return novaAtracao;
    },
    updateAtracao: (_, args, context) => {
        const  novaAtracao  = args.Atracoes;
        novaAtracao.id = parseInt(novaAtracao.id)
        const { atracoes } = context;
        for( let i = 0; i < atracoes.length; i++){
            const atra = atracoes[i]
            if(atra.id == novaAtracao.id){
                atracoes[i] = {...atracoes, ...novaAtracao};
                return atracoes[i];
            }
        }
        return null;
    },
    deleteAtracao: (_, args, context) => {
        const { atracoes } = context;
        const id = parseInt(args.id);
        atracoes.forEach((atracao, index) => {
            if(atracao.id === id){
                atracoes.splice(index, 1);
                return atracao.nome;
            }
        });
        return null;
    }
}

export default Mutation;