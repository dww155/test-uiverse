const Home = () => {
    return (
        <div className="w-full flex items-center justify-center px-6">
            <div className="text-center max-w-3xl">

                <h1
                    className="
                    text-4xl
                    md:text-6xl
                    font-bold
                    text-gray-800
                    dark:text-white
                    leading-tight
                    "
                >
                    This is just a demo project
                    <br />
                    for React + TypeScript
                    <span className="text-blue-600"> ^3^</span>
                </h1>


                <p
                    className="
                    mt-6
                    text-lg
                    text-gray-500
                    dark:text-gray-300
                    "
                >
                    A collection of beautiful loaders built with React,
                    TypeScript and TailwindCSS.
                </p>
            </div>
        </div>
    )
}

export default Home;