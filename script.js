

const imagesData = [
    { url: "image1.jpeg", description: "Les gens sont souvent tristes et ca se voit sur leurs tenues. Ca broie du noir. Ca se cache derriere du bleu marine (meme si c’est beau ca reste du zero prise de risque) que ce soit en été ou en hiver les gens ont peur de la couleur comme si ils avaient peur d’exister. Dans la vie il faut s’affirmer. Pourquoi toujours attendre l’approbation des autres pour acheter de belles choses, c’est les autres qui tiennent votre porte monnaie ??", source: "Source photo" },
    { url: "image2.PNG", description: "Violet", source: "Source photo" },
    { url: "image3.PNG", description: "Partons du principe que si vous fuyez ces couleurs...", source: "Source photo" },
    { url: "image4.jpg", description: "Parmi les influenceurs dit sartorial il y’en a...", source: "Source photo : Vinted" },
    { url: "image5.jpeg", description: "Akamine Yukio envoie une balle virtuelle a travers...", source: "Source photo : Drake’s Instagram Account" },
    { url: "image6.jpg", description: "Un magnifique blazer inspiré des années 70.", source: "Source photo : Ralph Lauren" },
    { url: "image7.PNG", description: "Admirez le pattern de cette veste issue de la Marque Tagliatore ! Bien evidemment cette veste entretien cette obsession pour les motifs et tant mieux sans ca la vie serait terne comme un  journal télévisé !", source: "Source photo : Pitti Uomo" },
    { url: "image8.jpeg", description: "Tres Jolie veste Mulish croisé avec un pattern tres particulier qui donne a son proprietaire certainement le nom d’oiseau rare", source: "Source photo : Ring Jacket" },
    { url: "image9.jpg", description: "Pour les incultes la veste Barbour type Bedale ou Beaufort c’est un truc de plouc de Versailles ou un truc de chasseur du dimanche. Pour les autres c’est une piece du vestiaire qui est dans le game de la sape depuis plus de 45 ans… et qui n’a pas pris une ride ! Il faut rire du manque de connaissance des ignorants", source: "Source photo : Lookbook Drake’s" },
    { url: "image10.jpg", description: "Un homme élégant marche dans les rues de Milan.", source: "Source photo : Sartorialist" },
    { url: "image11.JPG", description: "L’importance du choix des matières en hiver.", source: "Source photo : Permanent Style" },
    { url: "image12.jpeg", description: "Les costumes trois pièces reviennent en force.", source: "Source photo : Huntsman" },
    { url: "image13.jpg", description: "Pourquoi les couleurs terre sont idéales en automne.", source: "Source photo : The Armoury" },
    { url: "image14.jpg", description: "Les tendances sartoriales de cette année.", source: "Source photo : Bryceland’s" },
    { url: "image15.jpg", description: "Comment bien accessoiriser une tenue classique.", source: "Source photo : Ethan Newton" },
    { url: "image16.jpeg", description: "L’histoire du style Ivy League et son influence actuelle.", source: "Source photo : Ivy Style Blog" },
    { url: "image17.jpg", description: "Les différences entre le tailoring italien et britannique.", source: "Source photo : Savile Row Tailors" },
    { url: "image18.jpeg", description: "L’art du layering en hiver.", source: "Source photo : Drake’s Lookbook" },
    { url: "image19.jpg", description: "Les meilleurs souliers pour une garde-robe versatile.", source: "Source photo : Crockett & Jones" },
    { url: "image20.jpeg", description: "Ouais c’est vrai Kiton ca coute cher voire trop ! Mais sur Vinted tu peux en pécho pour moins de 4 chiffres ! Et apres tu pourras enfin bousculer les gars en costume Zara H&M dans les transports ca sera totalement legitime ! ", source: "Source photo : Turnbull & Asser" },
    { url: "image21.jpeg", description: "iL y'avait plus d'une centaine de tailleurs a paris pas plus tard que dans les années 50, aujourd'hui cette centaine se repartie sur la France entiere. Et c'est pas comme si l'industrie du textile des grosses machines commerciales etaient en france, la loi du profit maximal a delocalisé en masse les sapes mainstream dans les pays d'ASIE etc. qu'est ce que l'on a gagner au change au niveau social environnemental et egalement au niveau qualitatif? Je ne fais que m'interroger pour mieux precher pour ma paroisse...", source: "Source photo : Persol" },
    { url: "image22.jpeg", description: " Efficace simple distingué et pas cher , Vinted c’est vraiment le must pour denicher des perles rares, a condition d’y passer des heures à trouver la PIECE qui vous manque. Ici Gant propose un croisé d’un beau bleu avec des boutons qui fournissent un bel aspect global. Du preppy style accessible et qui fait fermer le bec a tout ceux qui pensent qu’il faut etre friqué pour etre stylé, bande de paresseux à hoodie ! ", source: "Source photo : Anglo-Italian" },
    { url: "image23.jpeg", description: " Je ne comprends ceux qui se disent ecolo mais qui n’achetent jamais des habits de couleurs vertes et qui boudent les habits de seconde main sur Vinted ! Vous arrivez a vous regarder en face ? C’est comment ! T’es ecolo mais ta veste est en polyester, nylon ou acrylique  et tu l’as pécho sur un site web de fast fashion situé a l’autre bout du monde ! Incroyable. Alors que tu aurais pu avoir une veste faite en Italie avec des materiaux nobles. Quelle dinguerie et quel manque d’education !", source: "Source photo : Burberry Archives" },
    { url: "image24.jpg", description: "Comment associer des motifs sans faire d’erreur.", source: "Source photo : Pitti Uomo" },
    { url: "image25.jpg", description: "Élévation culturelle et esthétique : Adopter ces styles implique une éducation vestimentaire et un raffinement du goût.    Encouragement d’une mode éthique et responsable : Être bien habillé sans surconsommer pousse d’autres personnes à réfléchir à leur manière de s’habiller     Meilleure première impression : Un homme bien habillé inspire immédiatement respect et confiance.    ", source: "Source photo : Fox Brothers" },
    { url: "image26.jpg", description: "Les medias mainstream ne vous diront jamais d’acheter ca. Ils preferont vous dire d’acheter la derniere idiotie a la mode vu dans une quelconque fashion week. Le but n’est pas de vous elever mais de prelever les deniers de votre portefeuille.", source: "Source photo : Brooks Brothers" },
    { url: "image27.jpg", description: "Les montres les plus adaptées au style sartorial.", source: "Source photo : Hodinkee" },
    { url: "image28.jpg", description: "La droite aurait pu se saisir du dossier ecologie en utilisant le sartorialisme comme arme de conversion massive. Mais ils ont préférés se concentrer de maniere obsessionelle sur le sujet de l'immigration qui est certes un sujet non negligeable dans la gestion d'une nation mais qui occulte le large spectre des occupations politiques des idees conservatrices. Le sartorialisme est vecteur d'emploi de vocation de culture et bien sur d'esthetisme et dieu seul sait qu'un monde sans beauté se meurt!", source: "Source photo : Rubinacci" },
    { url: "image29.jpg", description: "Je me demande pourquoi les ecolos ne sont pas les porte voix du sartorialisme ou tout au plus de la mode vintage classique de seconde main, c'est de loin le mode de consommation vestimentaire le plus ethique et le moins polluant. La droite voire l'extreme droite ne porte pas non plus cet etendard il y'a qu'a jeter un coup d'oeil a l'assemblee nationale coté RN ou republicain pour se rendre que l'elegance n'est pas au rendez vous. Le costume est pour ces gens la un habit professionel avant tout et non pas un hobby pour lequel il ferait du proselytisme .", source: "Source photo : Edward Sexton" },
    { url: "image30.jpg", description: "Nous n'allons faire l'apologie de la decroissance ici. Neanmoins Nous avons la solution pour reindustrialiser le pays et consommer sans polluer la planete. Le sartorialisme semble etre la reponse adequate a tout ces problemes.", source: "Source photo : Loro Piana" },
    { url: "image31.jpg", description: "On cite souvent le style anglais et italien en matiere d'art sartorial et egalement un certain style francais. Mais les americains ont egalement pu sortir du lot grace au style preppy. pOUR LES neophytes le style ivy league est une excellente porte d'entree dans le vestiaire classique masculin car l'exigence est au rendez vous en matiere de coupe matiere etc", source: "Source photo : Anderson & Sheppard" },
    { url: "image32.jpg", description: "Comment le style militaire influence la mode masculine.", source: "Source photo : Nigel Cabourn" },
    { url: "image33.jpg", description: "Pourquoi les mocassins sont parfaits pour la mi-saison.", source: "Source photo : Alden" },
    { url: "image34.jpg", description: "Vous ne pouvez plus compter sur Louis Vuitton Gucci ou que sais je encore pour avoir de la qualité et du style. Beaucoup d’ignorants pensent que l’experience luxe c’est d’entrer dans une de ces boutiques et d’emporter un produit de merde en elasthane viscose à 3000euros avec un logo bien ostentatoire… si vous pensez que suivre les  tendances de rappeurs c’est entrer dans la cour des grands vous vous meprenez…  ", source: "Source photo : Swaine Adeney Brigg" },
    { url: "image35.jpg", description: "Est ce que les stars de cinema et de la musique sont des influenceurs stylistique à suivre ? Je vais vous repondre clairement non ! Et d’ailleurs je vais etendre la mediocrité vestimentaire egalement aux politiciens et à toute les personnes ayant une vie publique. C’est incroyable le niveau merdique de toute ces personnalités connues. Il fut une epoque ou le standard de chic etait pour le plouc de ressembler vestimentairement parlant à une icône de la musique ou une personnalité politique mais ce n’est plus le cas.", source: "Source photo : Pantherella" },
    { url: "image36.jpg", description: "Comment bien choisir un parapluie élégant.", source: "Source photo : Francesco Maglia" },
    { url: "image37.jpg", description: "Quand on s’habille de la sorte il y’a fort à parier qu’on ne regarde pas la telerealité, qu’on n’est pas fan des fast food, que l’on ecoute pas de la musique debile, qu’on n’achete pas chez H&M et Zara, etc etc je continue la liste ? ", source: "Source photo : Holland & Sherry" },
    { url: "image38.JPG", description: "Bernhard Roetzel… c’est le nom de la personne que vous voyez sur la photo. Son nom ne vous evoque peut etre rien mais ce personnage fagoté de maniere tres classique et elegante est l’auteur d’un livre tres formateur pour tout gentleman en herbe ! ", source: "Source photo : Turnbull & Asser" },
    { url: "image39.jpg", description: "Le probleme avec la « mode » masculine mainstream c’est qu’elle change tout le temps à chaque saison. C’est d’une frivolité sans nom.  La mode classique elle reste intemporel, elle evolue mais les standards restent les memes.", source: "Source photo : Husbands Paris" },
    { url: "image40.jpg", description: "Le retour du col roulé dans les tenues formelles.", source: "Source photo : Canali" },
    { url: "image41.jpg", description: "Pourquoi le cardigan est un excellent substitut à la veste.", source: "Source photo : Drake’s" },
    { url: "image42.jpg", description: "Un costume bespoke ou une pièce vintage bien choisie peut même prendre de la valeur avec le temps, alors qu’un survêtement Nike se démode et finit souvent en friperie ou à la poubelle.  ", source: "Source photo : Berg & Berg" },
    { url: "image43.jpg", description: "Le style Ivy League et sartorial a une dimension historique et culturelle forte, inspirée des universités prestigieuses, du tailoring britannique et de la dolce vita italienne Le streetwear, bien que culturellement intéressant (hip-hop, skate, basketball), repose davantage sur la tendance et l’image commerciale", source: "Source photo : Frank Clegg" },
    { url: "image44.jpg", description: "L’art du repassage d’une chemise pour un rendu impeccable.", source: "Source photo : Charvet" },
    { url: "image45.jpg", description: "« Les costumes et compagnie c’est un truc de bourges ! » Alors permettez moi de rectifier votre idiotie…  J’ai assisté une fois à une vente privée chez Supreme (autrefois accredité marque street skate blabla tres tendance) et je n’ai pas vu des CLIENTS pauvres venant des bidonvilles a ces ventes ...  Non je n’ai vu que des petits bourges parisiens qui voulaient des hoodies editions limités (que plus personne ne met aujourdhui) . ", source: "Source photo : Valstar" },
    { url: "image46.jpg", description: " Les costumes et compagnie c’est un truc de bourges ! » Alors permettez moi de rectifier votre idiotie…  J’ai assisté une fois à une vente privée chez Supreme (autrefois accredité marque street skate blabla tres tendance) et je n’ai pas vu des CLIENTS pauvres venant des bidonvilles a ces ventes ...  Non je n’ai vu que des petits bourges parisiens qui voulaient des hoodies editions limités (que plus personne ne met aujourdhui) .", source: "Source photo : Harris Tweed" },
    { url: "image47.jpg", description: "Ozwald Boateng c'est une success story mais egalement un style inimitable certaine du a sa double culture et donc a sa singularité ethnique au sein de savile row.", source: "Source photo : Gloverall" },
    { url: "image48.jpg", description: "On s’habille pour s’elever. Ca peut paraître pompeux comme affirmation mais c’est vrai. Sinon on s’habille juste pour ne pas etre nu, et la ca laisse place a des derives… Vous avez envie de projeter quoi à travers votre vestiaire ? ", source: "Source photo : John Smedley" },
    { url: "image49.jpg", description: "L'idée que le sartorial, le bespoke ou le vintage sont réservés aux bourgeois est un mythe, souvent entretenu par méconnaissance de l’accès réel à ces style ", source: "Source photo : Patek Philippe" },
    { url: "image50.jpg", description: "  On me dit souvent la chose suivante : « l’art sartorial est tres eurocentriste et n’est pas adapté pour les minorités ethniques exogene » . Affirmation completement fausse ! Ozwald Boateng, grand tailleur d’origine nigeriane qui officie à Savile Row a su subtilement se réapproprier le tailoring anglais pour amener cette touche Africaine. Les esprits etriqués resteront bloqués sur leurs eurocentrisme victimaire pour ne pas evoluer tandis que les esprits brillants et creatifs comme Boateng sauront sublimer un art dit eurocentriste", source: "Source photo : Alan Flusser" },
    { url: "image51.jpg", description: "On s’habille pour s’elever. Ca peut paraître pompeux comme affirmation mais c’est vrai. Sinon on s’habille juste pour ne pas etre nu, et la ca laisse place a des derives… Vous avez envie de projeter quoi à travers votre vestiaire ?", source: "Source photo : Brioni" },
    { url: "image52.jpg", description: "L’importance de la coupe dans un pantalon habillé.", source: "Source photo : Cesare Attolini" },
    { url: "image53.jpg", description: "Ozwald Boateng a clairement su s'approprier l'univers sartorial qui est clairement eurocentrique au depart pour l'amener vers une sophistication africaine. Force est de constater que malgré les origines europeene de ce style vestimentaire il est possible de l'amener vers des univers extra europeen sans s'exclure du cercle fermé du sartorialisme.", source: "Source photo : Bresciani" },
    { url: "image54.jpg", description: "L'art sartorial est un signe d'emancipation face au determinisme sociale et culturel. La banlieu a tout a gagné a s'interesser a cet art vestimentaire afin de s'ouvrir a un autre paradigme. La culture vestimentaire hip hop ou street wear est tout aussi couteuse et n'est plus vecteur d'un message contestataire ( est ce qu'elle l'a été un jour?). Nike ADIDAS et consorts n'ont plus qu'une image commercial lisse pour vendre.", source: "Source photo : Ralph Lauren" },
    { url: "image55.jpg", description: "L’art de bien choisir une écharpe en hiver.", source: "Source photo : Begg & Co" },
    { url: "image56.jpg", description: "Difficile de parler de sprezzatura car tout les fan d'esthetisme vestimentaire sont subjectif sur le sujet. mais pensez vous que cette photo illustre l'esprit sprezzatura? Le poseur donne t-il l'impression d'avoir forcé le trait? A t-il particulierement etudié et mis sa tenue dans le but d'impressioner? donne t-il l'impression de faire un effort particulier, Je vous laisse juge.", source: "Source photo : Albini" },
    { url: "image57.jpg", description: "Est ce que le milieu sartorial est refractaire au changement ? Un air conservateur parfume l'air? L'innovation existe mais elle doit garder son caractere subtil et bien pensé. ", source: "Source photo : The Armoury" },
    { url: "image58.jpg", description: "Tenue cocorico pour Berteil. Pas forcement fan de cette institution cela dit cette veste incarne une tenue sport d'été particulierement appreciable que vous soyez coté vie veneto ou coté french riviera. L'art de vivre continental implique un certe flegme stylistique!", source: "Source photo : Levi’s Vintage Clothing" },
    { url: "image59.jpg", description: "Belle tenue de la maison Natalino. Une tenue bien evidemment d'inspiration Ivy League. Ici pas de frivolité. Les pieces etaient valables hier et le seront demain, nous n'avons pas a faire a des pieces jetables la saison suivante. C'est le principe meme de l'art vestimentaire classique par rapport à la mode frivole qui vit au gré des tendances de la musique de l'industrie du divertissement du capitalisme carnassier.", source: "Source photo : Aquascutum" },
    { url: "image60.jpg", description: "Beaucoup de personnes rejettent l'art sartorial car ils partent du principe que l'art vestimentaire formalise tout. Ce qui en soit n'est pas faux. Cela dit le formalisme permet de poser un cadre c'est la que la creativité donne le meilleur d'elle meme. Sans cadre la creativité se laisse aller au grand n'importe quoi. Jouer avec les regles plus ou moins contraignantes du costume masculin est un art subtil dans lequel les esprits exigeants mais joueur s'adonnent à coeur joie", source: "Source photo : Benson & Clegg" },
    { url: "image61.jpg", description: "il a un petit air de Macron vous ne trouvez pas ? Et pourtant vous ne verrez jamais Macron fagoté de la sorte. Les politiciens francais sont pour la plupart claqué niveau vestimentaire, rares sont les phenix du style. La fonction politique pourrait etre propice a de belles tenues mais la décivilisation touche egalement cette partie de la population...", source: "Source photo : Rota Pantaloni" },
    { url: "image62.jpg", description: "Incroyable tenue pour l'été. Le genre de couleur pour profiter de la french riviera ou de la dolce vita sur le continent europeen.", source: "Source photo : Valstar" },
    { url: "image63.jpg", description: "Incroyable tenue pour l'été. Le genre de couleur pour profiter de la french riviera ou de la dolce vita sur le continent europeen.", source: "Source photo : Valstar" }
];


/*function getDailyImage() {
    const today = new Date().toDateString(); // Récupérer la date sous forme de texte
    const storedData = localStorage.getItem("dailyImageData");

    if (storedData) {
        const parsedData = JSON.parse(storedData);
        if (parsedData.date === today) {
            document.getElementById("dailyImage").src = parsedData.image;
            document.getElementById("imageDescription").textContent = parsedData.description;
            document.getElementById("sourceimage").textContent = parsedData.source;

            return;
        }
    }

    const randomIndex = Math.floor(Math.random() * imagesData.length);
    const selectedImage = imagesData[randomIndex];

    // Sauvegarde dans localStorage
    localStorage.setItem("dailyImageData", JSON.stringify({
        date: today,
        image: selectedImage.url,
        description: selectedImage.description,
        source: selectedImage.source
    }));

      // Affichage de l'image et du texte
      document.getElementById("dailyImage").src = selectedImage.url;
      document.getElementById("imageDescription").textContent = selectedImage.description;
      document.getElementById("sourceimage").textContent = selectedImage.source;

  }*/
      function getDailyImage() {
        const now = new Date();
        const storedData = localStorage.getItem("dailyImageData");
    
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            const lastUpdate = new Date(parsedData.timestamp);
            const hoursDifference = Math.abs(now - lastUpdate) / 36e5; // Convert milliseconds to hours
    
            if (hoursDifference < 2) {
                document.getElementById("dailyImage").src = parsedData.image;
                document.getElementById("imageDescription").textContent = parsedData.description;
                document.getElementById("sourceimage").textContent = parsedData.source;
                return;
            }
        }
    
        const randomIndex = Math.floor(Math.random() * imagesData.length);
        const selectedImage = imagesData[randomIndex];
    
        // Sauvegarde dans localStorage
        localStorage.setItem("dailyImageData", JSON.stringify({
            timestamp: now,
            image: selectedImage.url,
            description: selectedImage.description,
            source: selectedImage.source
        }));   
        
        document.getElementById("dailyImage").src = selectedImage.url;
        document.getElementById("imageDescription").textContent = selectedImage.description;
        document.getElementById("sourceimage").textContent = selectedImage.source;
    }
  // Exécution au chargement de la page
  window.onload = getDailyImage;



  function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}


function hello() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
}