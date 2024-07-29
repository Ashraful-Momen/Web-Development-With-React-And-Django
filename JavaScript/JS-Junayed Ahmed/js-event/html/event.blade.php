<!doctype html>
<html lang="en">

<head>
    <title>Title</title>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

    <!-- Bootstrap CSS v5.2.1 -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous" />


</head>

<body>
    <div class="container">
        <div class="row">

            {{-- onsubmit  --}}

            <div class="col">
                <form id="form">
                    <label>Test field: <input type="text" id="form_input" /></label>
                    <br /><br />
                    <button type="submit">Submit form</button>
                </form>
                <p id="log"></p>

            </div>

            {{-- onChange --}}

            <div class="col">
                <label>
                    Choose an ice cream flavor:
                    <select class="ice-cream" name="ice-cream">
                        <option value="">Select One …</option>
                        <option value="chocolate">Chocolate</option>
                        <option value="sardine">Sardine</option>
                        <option value="vanilla">Vanilla</option>
                    </select>
                </label>

                <div class="result"></div>
            </div>

            {{-- keyup --}}

            <div class="col">
                <input id="keyId" placeholder="Click here, then press and release a key." size="40" />
                <p id="logKey"></p>

            </div>

            {{-- mouse over  --}}

            <div class="col">
                <ul id="test">
                    <li>item 1</li>
                    <li>item 2</li>
                    <li>item 3</li>
                  </ul>

            </div>

            {{-- mouse move,mouse down , mouse up  --}}

            <div class="col">
                <input type="color" id="colorPicker" value="#00ff00">
                <button id="eraserButton">Toggle Eraser</button>
                <canvas id="myPics" width="500" height="500" style=" border: 1px solid black;"></canvas>

            </div>



        </div>
    </div>

    <script src="{{ asset('js/3-JsEvent.js') }}"></script>

    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
        integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous">
    </script>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"
        integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+" crossorigin="anonymous">
    </script>
</body>

</html>
