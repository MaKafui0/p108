function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kA4F -80yW/model.json', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}
function gotResults(error, results) {o
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear -'+
        results[0].label;
        document.getElementById("result").innerHTML = 'Accuracy - '+
        (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("result_confidence").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_r+")";

        img = document.getElementById('dog');
        img1 = document.getElementById('cat');
        img2 = document.getElementById('cow');
        img3 = document.getElementById('ear');

        if (results[0].label == "dog") {
            dog.src = 'dog.gif';
            cat.src = 'cat.png';
            cow.src = 'cow.png';
            ear.src = 'ear.png';
        } else if (results[0].label == "cat") {
            dog.src = 'dog.avif';
            cat.src = 'cat.gif';
            cow.src = 'cow.png';
            ear.src = 'ear.png';
        } else  if (results[0].label == "cow") {
            dog.src = 'dog.avif';
            cat.src = 'cat.png';
            cow.src = 'cow.gif';
            ear.src = 'ear.png';
        } else {
            dog.src = 'dog.avif';
            cat.src = 'cat.png';
            cow.src = 'cow.png';
            ear.src = 'ear.png';
        }
    }
}