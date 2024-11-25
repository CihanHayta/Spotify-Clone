

const url = 'https://shazam.p.rapidapi.com/search?term=adele&locale=en-US';

const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '6c554a6d71msh94191922f8bd431p12f8dfjsn5e7a7a88497b',
		'x-rapidapi-host': 'shazam.p.rapidapi.com'
	}
};
  


//? api classı

export class API{
    //?popüler müzilkleri apiden alan fonks
   async getpopuler (){
      //   const res = await fetch(url ,options);
      //   const data = await res.json();

      //  const fomatted = data.tracks.hits.map((item)=>item.track);
        
        
      // return (fomatted);
      // sprit oparetörü (iki datayı birden kullandık)
      const data = await this.searchMusic(`acdc`);
      const data1 = await this.searchMusic(`redhotchilireppers`);

      return[...data, ...data1]
    }

   async searchMusic(query){
        const url = `https://shazam.p.rapidapi.com/search?term=${query}&locale=en-US`;

      const res = await fetch(url,options);
      const data=  await res.json();
      const fomatted = data.tracks.hits.map((item)=>item.track);
      return fomatted;
      
    };
};

