import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { Button } from "./ui/button";

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data, event) => {
        event.preventDefault();
        try {
            const result = await emailjs.send(
                "service_6x7f0na",
                "template_x2mcb1q",
                data,
                "3QWXS0gEsM1wpiM9o"
            );
            console.log("Mensaje enviado con éxito:", result);
            reset();
        } catch (error) {
            console.error("Error al enviar el mensaje:", error);
        }
    };

    return (
        <section id="Contacto" className="py-12 text-white">
            <div className="container mx-auto flex flex-col justify-center items-center gap-4 px-4 md:flex-row">
                <div className="flex flex-col justify-center items-center h-[430px] max-w-2xl px-10 py-4 bg-[url(/Img/JIREH%20ENGLISH%20ACADEMY-15.avif)] bg-cover bg-center rounded-xl">
                    <h2 className="text-3xl font-bold text-center mb-6 md:text-5xl drop-shadow-[0_0px_7px_rgba(255,255,255,0.35)]">
                        Contáctenos Hoy para Más Información
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
                    <div className="flex flex-col gap-2 items-center md:justify-between md:flex-row">
                        <Button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-600"
                        >
                            Enviar
                        </Button>
                        <Button
                            asChild
                            className="bg-green-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-green-600"
                        >
                            <a href="https://wa.me/+56926124587">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    width="24px"
                                    height="24px"
                                    viewBox="0 0 48 48"
                                    version="1.1"
                                >
                                    <title>Whatsapp-color</title>
                                    <desc>Created with Sketch.</desc>
                                    <defs> </defs>
                                    <g
                                        id="Icons"
                                        stroke="none"
                                        strokeWidth="1"
                                        fill="none"
                                        fillRule="evenodd"
                                    >
                                        <g
                                            id="Color-"
                                            transform="translate(-700.000000, -360.000000)"
                                            fill="#ffffff"
                                        >
                                            <path
                                                d="M723.993033,360 C710.762252,360 700,370.765287 700,383.999801 C700,389.248451 701.692661,394.116025 704.570026,398.066947 L701.579605,406.983798 L710.804449,404.035539 C714.598605,406.546975 719.126434,408 724.006967,408 C737.237748,408 748,397.234315 748,384.000199 C748,370.765685 737.237748,360.000398 724.006967,360.000398 L723.993033,360.000398 L723.993033,360 Z M717.29285,372.190836 C716.827488,371.07628 716.474784,371.034071 715.769774,371.005401 C715.529728,370.991464 715.262214,370.977527 714.96564,370.977527 C714.04845,370.977527 713.089462,371.245514 712.511043,371.838033 C711.806033,372.557577 710.056843,374.23638 710.056843,377.679202 C710.056843,381.122023 712.567571,384.451756 712.905944,384.917648 C713.258648,385.382743 717.800808,392.55031 724.853297,395.471492 C730.368379,397.757149 732.00491,397.545307 733.260074,397.27732 C735.093658,396.882308 737.393002,395.527239 737.971421,393.891043 C738.54984,392.25405 738.54984,390.857171 738.380255,390.560912 C738.211068,390.264652 737.745308,390.095816 737.040298,389.742615 C736.335288,389.389811 732.90737,387.696673 732.25849,387.470894 C731.623543,387.231179 731.017259,387.315995 730.537963,387.99333 C729.860819,388.938653 729.198006,389.89831 728.661785,390.476494 C728.238619,390.928051 727.547144,390.984595 726.969123,390.744481 C726.193254,390.420348 724.021298,389.657798 721.340985,387.273388 C719.267356,385.42535 717.856938,383.125756 717.448104,382.434484 C717.038871,381.729275 717.405907,381.319529 717.729948,380.938852 C718.082653,380.501232 718.421026,380.191036 718.77373,379.781688 C719.126434,379.372738 719.323884,379.160897 719.549599,378.681068 C719.789645,378.215575 719.62006,377.735746 719.450874,377.382942 C719.281687,377.030139 717.871269,373.587317 717.29285,372.190836 Z"
                                                id="Whatsapp"
                                            ></path>
                                        </g>
                                    </g>
                                </svg>
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
