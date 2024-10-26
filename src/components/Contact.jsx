import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { Button } from "./ui/button";

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data, event) => {
        event.preventDefault();
        try {
            const result = await emailjs.send(
                "YOUR_SERVICE_ID",
                "YOUR_TEMPLATE_ID",
                data,
                "YOUR_USER_ID"
            );
            console.log("Mensaje enviado con éxito:", result);
        } catch (error) {
            console.error("Error al enviar el mensaje:", error);
        }
    };

    return (
        <section className="py-12 text-white">
            <div className="container mx-auto flex flex-col justify-center items-center px-4 md:flex-row">
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold text-center mb-6 md:text-5xl drop-shadow-[0_0px_7px_rgba(255,255,255,0.35)]">
                        Contáctanos Hoy para Más Información
                    </h2>
                    <p className="text-center mb-8 md:text-lg">
                        Si estás listo para llevar tu inglés al siguiente nivel,
                        ponte en contacto con nosotros. Te ayudaremos a
                        encontrar el curso que mejor se adapte a tus
                        necesidades.
                    </p>
                </div>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="max-w-lg mx-auto bg-white p-8 shadow-md rounded-lg w-full text-black"
                >
                    <div className="mb-4">
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Nombre
                        </label>
                        <input
                            type="text"
                            id="name"
                            {...register("name", {
                                required: "El nombre es requerido",
                            })}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                        />
                        {errors.name && (
                            <span className="text-red-500">
                                {errors.name.message}
                            </span>
                        )}
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Correo electrónico
                        </label>
                        <input
                            type="email"
                            id="email"
                            {...register("email", {
                                required: "El correo electrónico es requerido",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Formato de correo inválido",
                                },
                            })}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                        />
                        {errors.email && (
                            <span className="text-red-500">
                                {errors.email.message}
                            </span>
                        )}
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Teléfono
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            {...register("phone", {
                                required: "El teléfono es requerido",
                            })}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                        />
                        {errors.phone && (
                            <span className="text-red-500">
                                {errors.phone.message}
                            </span>
                        )}
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="message"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Mensaje
                        </label>
                        <textarea
                            id="message"
                            rows="4"
                            {...register("message", {
                                required: "El mensaje es requerido",
                            })}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-zinc-950"
                        ></textarea>
                        {errors.message && (
                            <span className="text-red-500">
                                {errors.message.message}
                            </span>
                        )}
                    </div>
                    <div className="flex justify-between items-center">
                        <Button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-600"
                        >
                            Enviar
                        </Button>
                        <Button asChild>
                            <a
                                href="https://wa.me/1234567890"
                                className="bg-green-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-green-600"
                            >
                                Habla con nosotros en WhatsApp
                            </a>
                        </Button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;
