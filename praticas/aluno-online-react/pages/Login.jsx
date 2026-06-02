import logo from '../src/assets/learn.svg';
import FormLogin from '../src/forms/FormLogin';
import Footer from '../components/Footer';

function Login() {
    return (
        <main className="flex flex-col min-h-screen bg-gray-50 items-center justify-between py-10">
            
            <section className="bg-white p-10 rounded-lg border border-gray-200 shadow-sm w-full max-w-[450px] flex flex-col items-center">
                <img src={logo} alt="Imagem do Logo" className="w-20 h-auto mb-4" />
                
                <h1 className="text-3xl font-bold text-gray-800 mb-8">
                    Aluno Online
                </h1>

                <article className="w-full max-w-md">
                    <FormLogin />
                </article>
            </section>

            <Footer />
        </main>
    );
}

export default Login;