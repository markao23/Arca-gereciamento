// src/app/register/page.tsx (ou o caminho do seu componente Register)

import Link from 'next/link';
import { X } from 'lucide-react';


export default function Register() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-indigo-900 p-4 sm:p-6 lg:p-8">
            <div className="relative w-full max-w-md bg-gray-800 shadow-xl rounded-xl p-6 sm:p-8 border border-indigo-700/50">
                <Link href="/" aria-label="Voltar pra pagina inicial" className="absolute top-6 right-6 p-1 rounded-full text-gray-500 hover:text-white
                 hover:bg-gray-700 transition-all">
                    <X size={20}/>
                </Link>
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-white">
                        Criar Nova Conta
                    </h1>
                    <p className="mt-2 text-indigo-200">
                        Junte-se à nossa comunidade hoje mesmo no ARCA
                    </p>
                </div>

                <form className="space-y-6">
                    {/* Campo Nome Completo */}
                    <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-indigo-100">
                            Nome Completo
                        </label>
                        <div className="mt-1">
                            <input
                                id="fullName"
                                name="fullName"
                                type="text"
                                autoComplete="name"
                                required
                                className="appearance-none block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="Seu nome completo"
                            />
                        </div>
                    </div>

                    {/* Campo Email */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-indigo-100">
                            Endereço de E-mail
                        </label>
                        <div className="mt-1">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="appearance-none block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="seu.email@exemplo.com"
                            />
                        </div>
                    </div>

                    {/* Campo Senha */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-indigo-100">
                            Senha
                        </label>
                        <div className="mt-1">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="new-password"
                                required
                                className="appearance-none block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="Crie uma senha forte"
                            />
                        </div>
                    </div>

                    {/* Campo Confirmar Senha */}
                    <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-indigo-100">
                            Confirmar Senha
                        </label>
                        <div className="mt-1">
                            <input
                                id="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                autoComplete="new-password"
                                required
                                className="appearance-none block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="Confirme sua senha"
                            />
                        </div>
                    </div>

                    {/* Checkbox de Termos de Uso */}
                    <div className="flex items-center">
                        <input
                            id="terms"
                            name="terms"
                            type="checkbox"
                            required
                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-600 rounded bg-gray-700"
                        />
                        <label htmlFor="terms" className="ml-2 block text-sm text-indigo-100">
                            Eu concordo com os{' '}
                            <Link href="/terms" className="font-medium text-indigo-400 hover:text-indigo-300">
                                Termos de Uso
                            </Link>{' '}
                            e{' '}
                            <Link href="/policy" className="font-medium text-indigo-400 hover:text-indigo-300">
                                Política de Privacidade
                            </Link>
                            .
                        </label>
                    </div>

                    {/* Botão de Cadastro */}
                    <div>
                        <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                        >
                            Cadastrar
                        </button>
                    </div>
                </form>

                {/* Link para Login */}
                <div className="mt-6 text-center">
                    <p className="text-sm text-indigo-200">
                        Já tem uma conta?{' '}
                        <Link href="/login" className="font-medium text-indigo-400 hover:text-indigo-300">
                            Faça login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}