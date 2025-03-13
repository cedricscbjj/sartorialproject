

const imagesData = [
    { url: "image1.jpeg", description: "Les gens sont souvent tristes et ça se voit ...", source: "Source photo" },
    { url: "image2.PNG", description: "Violet", source: "Source photo" },
    { url: "image3.PNG", description: "Partons du principe que si vous fuyez ces couleurs...", source: "Source photo" },
    { url: "image4.jpg", description: "Parmi les influenceurs dit sartorial il y’en a...", source: "Source photo : Vinted" },
    { url: "image5.jpeg", description: "Akamine Yukio envoie une balle virtuelle a travers...", source: "Source photo : Drake’s Instagram Account" },
    { url: "image6.jpg", description: "Un magnifique blazer inspiré des années 70.", source: "Source photo : Ralph Lauren" },
    { url: "image7.PNG", description: "Les vestes croisées donnent souvent une allure...", source: "Source photo : Pitti Uomo" },
    { url: "image8.jpeg", description: "Voici un exemple de tailoring italien moderne.", source: "Source photo : Ring Jacket" },
    { url: "image9.jpg", description: "La mode masculine évolue avec le temps.", source: "Source photo : Lookbook Drake’s" },
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
    { url: "image20.jpeg", description: "Comment bien choisir une chemise en fonction de son col.", source: "Source photo : Turnbull & Asser" },
    { url: "image21.jpeg", description: "Les lunettes les plus iconiques du style preppy.", source: "Source photo : Persol" },
    { url: "image22.jpeg", description: "Pourquoi le lin est un indispensable de l’été.", source: "Source photo : Anglo-Italian" },
    { url: "image23.jpeg", description: "Un trench-coat bien coupé peut transformer une tenue.", source: "Source photo : Burberry Archives" },
    { url: "image24.jpg", description: "Comment associer des motifs sans faire d’erreur.", source: "Source photo : Pitti Uomo" },
    { url: "image25.jpg", description: "L’élégance discrète des costumes en flanelle.", source: "Source photo : Fox Brothers" },
    { url: "image26.jpg", description: "L’histoire du blazer bleu marine et son intemporalité.", source: "Source photo : Brooks Brothers" },
    { url: "image27.jpg", description: "Les montres les plus adaptées au style sartorial.", source: "Source photo : Hodinkee" },
    { url: "image28.jpg", description: "Les pochettes de costume : quand et comment les porter.", source: "Source photo : Rubinacci" },
    { url: "image29.jpg", description: "L’élégance des pantalons taille haute.", source: "Source photo : Edward Sexton" },
    { url: "image30.jpg", description: "Les pulls en cachemire, un luxe nécessaire ?", source: "Source photo : Loro Piana" },
    { url: "image31.jpg", description: "Les différentes coupes de vestes et leurs effets visuels.", source: "Source photo : Anderson & Sheppard" },
    { url: "image32.jpg", description: "Comment le style militaire influence la mode masculine.", source: "Source photo : Nigel Cabourn" },
    { url: "image33.jpg", description: "Pourquoi les mocassins sont parfaits pour la mi-saison.", source: "Source photo : Alden" },
    { url: "image34.jpg", description: "Les accessoires en cuir : ce qu’il faut absolument avoir.", source: "Source photo : Swaine Adeney Brigg" },
    { url: "image35.jpg", description: "L’importance des chaussettes dans une tenue habillée.", source: "Source photo : Pantherella" },
    { url: "image36.jpg", description: "Comment bien choisir un parapluie élégant.", source: "Source photo : Francesco Maglia" },
    { url: "image37.jpg", description: "Les meilleurs tissus pour un costume d’été.", source: "Source photo : Holland & Sherry" },
    { url: "image38.JPG", description: "Pourquoi les boutons de manchette ne sont pas dépassés.", source: "Source photo : Turnbull & Asser" },
    { url: "image39.jpg", description: "L’influence du style parisien sur le tailoring moderne.", source: "Source photo : Husbands Paris" },
    { url: "image40.jpg", description: "Le retour du col roulé dans les tenues formelles.", source: "Source photo : Canali" },
    { url: "image41.jpg", description: "Pourquoi le cardigan est un excellent substitut à la veste.", source: "Source photo : Drake’s" },
    { url: "image42.jpg", description: "Les cravates en tricot, une touche de décontraction maîtrisée.", source: "Source photo : Berg & Berg" },
    { url: "image43.jpg", description: "Comment bien choisir un sac en cuir élégant.", source: "Source photo : Frank Clegg" },
    { url: "image44.jpg", description: "L’art du repassage d’une chemise pour un rendu impeccable.", source: "Source photo : Charvet" },
    { url: "image45.jpg", description: "Pourquoi les vestes sahariennes sont un incontournable de l’été.", source: "Source photo : Valstar" },
    { url: "image46.jpg", description: "Les vestes en tweed, un classique automnal.", source: "Source photo : Harris Tweed" },
    { url: "image47.jpg", description: "L’élégance intemporelle du duffle-coat.", source: "Source photo : Gloverall" },
    { url: "image48.jpg", description: "Les pulls col V et leur versatilité dans le vestiaire masculin.", source: "Source photo : John Smedley" },
    { url: "image49.jpg", description: "Comment bien choisir une montre habillée.", source: "Source photo : Patek Philippe" },
    { url: "image50.jpg", description: "L’association des couleurs dans une tenue sartoriale.", source: "Source photo : Alan Flusser" },
    { url: "image51.jpg", description: "Pourquoi le costume rayé fait son retour.", source: "Source photo : Brioni" },
    { url: "image52.jpg", description: "L’importance de la coupe dans un pantalon habillé.", source: "Source photo : Cesare Attolini" },
    { url: "image53.jpg", description: "Les chaussettes apparentes : faux pas ou signe de style ?", source: "Source photo : Bresciani" },
    { url: "image54.jpg", description: "Pourquoi les vestes en velours côtelé sont un bon investissement.", source: "Source photo : Ralph Lauren" },
    { url: "image55.jpg", description: "L’art de bien choisir une écharpe en hiver.", source: "Source photo : Begg & Co" },
    { url: "image56.jpg", description: "Les meilleures matières pour une chemise d’été.", source: "Source photo : Albini" },
    { url: "image57.jpg", description: "Comment bien porter un gilet sans manches.", source: "Source photo : The Armoury" },
    { url: "image58.jpg", description: "Les meilleures coupes de jeans pour un look intemporel.", source: "Source photo : Levi’s Vintage Clothing" },
    { url: "image59.jpg", description: "Pourquoi le trench-coat reste une pièce essentielle.", source: "Source photo : Aquascutum" },
    { url: "image60.jpg", description: "Comment choisir des boutons en corne pour ses vestes.", source: "Source photo : Benson & Clegg" },
    { url: "image61.jpg", description: "Les raisons du retour du pantalon plissé.", source: "Source photo : Rota Pantaloni" },
    { url: "image62.jpg", description: "Pourquoi la veste en daim est une pièce intemporelle.", source: "Source photo : Valstar" }

];


function getDailyImage() {
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

  }
  
  // Exécution au chargement de la page
  window.onload = getDailyImage;