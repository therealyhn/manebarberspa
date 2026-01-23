import React from 'react';

function ContactForm() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Slanje....");
        const formData = new FormData(event.target);

        formData.append("access_key", "3df84bb9-73e9-46d2-a33c-88a0b158ba26");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Uspešno ste zakazali termin. Hvala Vam!");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };
    return (
        <div className="w-full bg-bgprime">
            <div className="flex flex-col lg:flex-row gap-20 w-full py-20 px-4 max-w-7xl mx-auto">
                {/* Left side */}
                <div className="flex-1 space-y-8">
                    <div>
                        <h2 className="text-4xl font-bold mb-10 font-prata">Kontaktirajte me i
                            <br />pošaljite poruku još danas!</h2>
                    </div>

                    <div className="space-y-4">
                        <div className="mb-10">
                            <h3 className="text-2xl mb-1 font-prata">Prvog Maja 37, Kovačićevo</h3>
                            <p className="text-xl font-lato">Smederevo, Serbia</p>
                        </div>

                        <div>
                            <p className="text-second-dark text-xl font-lato">Email: manesbarbershop@gmail.com</p>
                            <p className="text-second-dark text-xl font-lato">Telefon: +381 64 125 04 70</p>
                        </div>
                    </div>
                </div>

                {/* Right side */}
                <div className="flex-1">
                    <form className="space-y-6 bg-white p-10 rounded-sm shadow-md" onSubmit={onSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input
                                type="text"
                                placeholder="Ime"
                                className="w-full px-4 py-3 border border-gray-200 rounded 
                                focus:outline-none focus:border-prime"
                                required
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full px-4 py-3 border border-gray-200 rounded 
                                focus:outline-none focus:border-prime"
                                required
                            />
                        </div>

                        <textarea
                            placeholder="Poruka"
                            className="w-full px-4 py-3 border border-gray-200 rounded 
                            focus:outline-none focus:border-prime h-40"
                            required
                        ></textarea>

                        <button
                            type="submit"
                            className="bg-prime text-white px-8 py-3 rounded
                             hover:bg-black transition-all duration-300 
                            uppercase text-sm font-prata"
                        >
                            pošaljite poruku
                        </button>
                    </form>
                    <span>{result}</span>
                </div>
            </div>
        </div>
    )
}

export default ContactForm
