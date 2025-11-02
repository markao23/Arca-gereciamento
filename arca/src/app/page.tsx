import type { NextPage } from 'next'
import Link from 'next/link'
import { Car, DollarSign, CalendarIcon, Users,
    ChevronRight, Instagram, Facebook, Youtube} from 'lucide-react'
const HomePage: NextPage = () => {
  return (
    <div className=" flex min-h-screen flex-col bg-gray-100 font-sans">
        <header className=" sticky top-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm">
            <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <Link href="/" className="flex items-center gap-2 test-xl font-bold text-gray-800">
                    <Car className="h-7 w-7" />
                    <span>ARCA</span>
                </Link>
                <nav className="hidden items-center space-x-6 md:flex">
                    <Link href="" className="text-sm font-medium text-gray-600 hover:text-blue-600">
                        Colocação de Placa Preta
                    </Link>
                    <Link href="" className="text-sm font-medium text-gray-600 hover:text-blue-600">
                        Mensalidades
                    </Link>
                    <Link href="" className="text-sm font-medium text-gray-600 hover:text-blue-600">
                        Beneficios
                    </Link>
                    <Link href="" className="text-sm font-medium text-gray-600 hover:text-blue-600">
                        Sobre Nos
                    </Link>
                    <Link href="" className="text-sm font-medium text-gray-600 hover:text-blue-600">
                        Contato
                    </Link>
                </nav>
                <div className="flex items-center">
                    <Link href="/login" className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium
                    text-white shadow-sm trasition-colors hover:bg-blue-700">
                        Area do Membro
                    </Link>
                </div>
            </div>
        </header>
        <main className="flex-grow">
            <section className="relative overflow-hidden bg-white py-12 md:py-16">
                <div className=" container mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 md:grid-cols-2 md:items-start lg:px-8">
                    <div className="z-10">
                        <span className="mb-2 block text-sm font-semibold uppercase tracking-wide text-blue-600">
                            ARCA Antigosmobilista da região de Catenduva
                        </span>
                        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                            Paixão por carros antigos. Gestão
                        </h1>
                        <p className="mt-6 text-lg text-gray-600">
                            Bem-vindo ao portal oficial do nosso clube. Pague sua mensalidade,
                            acesse eventos exclusivos e conecte-se com outros apaixonados por carros
                        </p>
                        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                            <Link href="/acossiar" className="flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3
                             text-base font-medium text-white shadow-md trasition-transform hover:scale-105">
                                Torne-se Membro
                                <ChevronRight className="ml-1 h-5 w-5"/>
                            </Link>
                            <Link href="" className="flex items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-medium
                              text-gray-700 shadow-sm transition-transform hover:scale-105">
                                Ver Beneficios
                            </Link>
                        </div>
                    </div>
                    <div>
                        {/*
                          NOTA: Susbititua este div por um componente <Image> do Next.js
                          ex: <Image src="path/to/image" alt="imagemdo carro" layout="fill" objectFit="cover" className="rounded-lg" />
                        */}
                    </div>
                </div>
            </section>
            <section id="beneficios" className="relative bg-gradient-vibrant py-24 overflow-hidden">
                <div className="container mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Sua experiencia de membro, simplificada
                        </h2>
                        <p className="mt-4 text-lg text-gray-800">
                            gerencia sua associação com total facididade e aproveite todos beneficios
                        </p>
                    </div>
                    <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
                        <div className="transform rounded-lg bg-white p-5 shadow-lg transition-transform hover:scale-105">
                            <div className=" flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                                <DollarSign className="h-6 w-6" />
                            </div>
                            <h3 className="-mt-0.1 text-xl font-semibold text-gray-900">
                                Gestão de Mensalidade
                            </h3>
                            <p className="mt-2 text-base text-gray-600">
                                Pague sua mensalidade de forma segura e rapida (Pix, Cartão, Boleto, em dinheiro)
                                Acesse seu historico de pagamentos a qualquer momento
                            </p>
                        </div>
                        <div className="transform rounded-lg bg-white p-6 shadow-lg transition-transform hover:scale-105">
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                                <CalendarIcon className="h-6 w-6" />
                            </div>
                            <h3 className="-mt-0.1 text-xl font-semibold text-gray-900">
                                Agenda de Eventos
                            </h3>
                            <p className="mt-2 text-base text-gray-600">
                                Confira a agenda completa de encontros, passeios e exposições.
                                Confirme sua presença com apenas um clique.
                            </p>
                        </div>
                        <div className="transform rounded-lg bg-white p-6 shadow-lg transition-transform hover:scale-105">
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                                <Users className="h-6 w-6" />
                            </div>
                            <h3 className="-mt-0.1 text-xl font-semibold text-gray-900">
                                Área do Membro Exclusiva
                            </h3>
                            <p className="mt-2 text-base text-gray-600">
                                Acesse classificados, fóruns de discussão, atualize seus dados e
                                baixe sua carteirinha digital de associado.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-blue-800">
                <div className="mx-auto max-w-7xl py-16 px-4 text-center sm:py-20 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            <span className="block">
                Faça parte da nossa história
            </span>
                    </h2>
                    <p className="mt-4 text-lg leading-6 text-gray-700">
                        Junte-se à maior comunidade de antigomobilista resgatando as antiguidades
                        na região de Catanduva
                    </p>
                    <Link href="/associar" className="mt-8 inline-flex w-auto items-center rounded-lg border
                      border-transparent bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-md
                      transition-colors hover:bg-blue-700">
                        Quero me Associar
                    </Link>
                </div>
            </section>
        </main>
        <footer className="bg-gray-800 text-gray-400">
            <div className="container mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    <div className="md:col-span-2">
                        <Link href="" className=" flex items-center gap-2 text-xl font-bold text-white">
                            <Car className="h-20 w-20"/>
                            <span>
                                {/*
                                    NOTA: uma possivel melhoria é colocar a logo da organização
                                    que fica de uma forma amigavel e elegante
                                    <Image> do Next.js
                                */}
                                ARCA Antigosmobilistas da Região de Catanduva
                            </span>
                            <p className="mt-4 text-sm">
                                Preservando e resgatando carros antigos como noe fez com os animais
                                quando aconteceu o diluvio
                            </p>
                        </Link>
                        <div className="mt-6 flex space-x-4">
                            <Link href="#" className="hover:text-white">
                                <span className="sr-only">Facebook</span>
                                <Facebook className="h-6 w-6" />
                            </Link>
                            <Link href="#" className="hover:text-white">
                                <span className="sr-only">Instagram</span>
                                <Instagram className="h-6 w-6" />
                            </Link>
                            <Link href="#" className="hover:text-white">
                                <span className="sr-only">YouTube</span>
                                <Youtube className="h-6 w-6" />
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
                            Navegação rapida
                        </h3>
                        <ul className="mt-4 space-y-2">
                            <li><Link href="#beneficios" className="text-sm hover:text-white">Benefícios</Link></li>
                            <li><Link href="#eventos" className="text-sm hover:text-white">Eventos</Link></li>
                            <li><Link href="/associar" className="text-sm hover:text-white">Associe-se</Link></li>
                            <li><Link href="/login" className="text-sm hover:text-white">Área do Membro</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
                            Contato
                        </h2>
                        <ul className="mt-4 space-y-2">
                            <li className="text-sm">Rua Fictícia, 123 - Centro</li>
                            <li className="text-sm">Catanduva - SP, 15800-001</li>
                            <li className="text-sm">contato@antigoscatanduva.com.br</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-700 pt-8 text-center">
                    <p className="text-sm">
                        &copy; {new Date().getFullYear()}ARCA. todos os direitos reservados
                    </p>
                </div>
            </div>
        </footer>
    </div>
  );
}
export default HomePage;
