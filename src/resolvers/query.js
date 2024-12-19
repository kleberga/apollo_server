const Query = {
    welcome: () => {
        return "Olá";
    },
    atracoes: (_, args, context) => {
        const { atracoes } = context;
        return atracoes;
    }
}

export default Query;