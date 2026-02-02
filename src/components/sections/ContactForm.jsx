import React from 'react';
import Map from './Map';
import logo from '../../assets/logo-full-text.png';

function ContactForm() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Slanje....");
        const formData = new FormData(event.target);

        formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);

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
        <section className="w-full min-h-screen bg-bgprime flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-10 md:px-20 py-20 w-full">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch">
                    {/* Left side: text + form */}
                    <div className="lg:w-1/2 flex flex-col">
                        <div className="mb-8">
                            <p className="text-xs uppercase tracking-[0.4em] text-second/70 font-lato mb-4">
                                Kontakt
                            </p>
                            <h2 className="text-4xl md:text-5xl font-bold font-prata">
                                Kontaktirajte me i<br />pošaljite poruku danas
                            </h2>
                            <div className="w-24 h-px bg-third mt-6"></div>
                        </div>

                        <div className="space-y-2 mb-8">
                            <p className="text-third-dark text-lg font-lato">Prvog Maja 37, Kovačićevo</p>
                            <p className="text-third-dark text-lg font-lato">Smederevo, Serbia</p>
                            <p className="text-third-dark text-lg font-lato">Email: manesbarbershop@gmail.com</p>
                            <p className="text-third-dark text-lg font-lato">Telefon: +381 64 125 04 70</p>
                        </div>

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

                    {/* Right side: map */}
                    <div className="lg:w-1/2 flex flex-col justify-evenly">
                        <div className="h-40 flex items-center justify-center bg-bgprime">
                            <img src={logo} alt="Mane logo" className="h-20 md:h-40 w-auto" />
                        </div>
                        <div>
                            <Map />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactForm
