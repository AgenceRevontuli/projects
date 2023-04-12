import { NextPage } from "next"
import Image from "next/image";

const ProjectItem: NextPage = () => {

    const style = { "--value": 30 } as React.CSSProperties

    return(
        <div>
            <div className="hero-content flex-col lg:flex-row bg-base-200">
                <Image 
                    src="https://picsum.photos/id/237/200/300"
                    alt="Photo à changer"
                    width={200}
                    height={100}
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-5xl font-bold text-center m-4">Réseau multisites Wordpress</h1>
                    <div className="my-6 flex justify-between items-center px-2">
                        <div>
                            <p>Client : <span className="badge badge-secondary font-bold">FNPSL</span></p>
                        </div>
                        <div>
                            <p className="border-solid border-2 border-white py-2 px-4 rounded-lg font-bold">Prix : 23 000 € HT</p>
                        </div>
                        <div>
                            <p>Progression du projet : <span className="radial-progress" style={style}>30%</span></p>
                        </div>
                    </div>
                    <p className="">Création d{"'"}un réseau mutiliste wordpress pour les associations de la Fédération Nationale des Professions Sport et Loisirs. Le réseau doit comprendre 52 sites internet. Permettre de reprendre les anciens URLs</p>
                </div>
            </div>
            <div className="bg-base-200 p-4">
                <div className="inline-flex items-center justify-between w-full">
                    <h2 className="font-bold text-2xl my-2">Tâches à réaliser</h2>
                    <button className="btn btn-primary">Ajouter une tâche</button>
                </div>
                <div>
                    <ul>
                        <li className="flex gap-3 items-center text-xl my-2"><input type="checkbox"  className="checkbox checkbox-accent" /> Tâche 1</li>
                        <li className="flex gap-3 items-center text-xl my-2"><input type="checkbox"  className="checkbox checkbox-accent" /> Tâche 2</li>
                        <li className="flex gap-3 items-center text-xl my-2"><input type="checkbox"  className="checkbox checkbox-accent" /> Tâche 3</li>
                    </ul>
                </div>
            </div>
            <div className="bg-base-200 p-4">
                <div className="inline-flex items-center justify-between w-full">
                    <h2 className="font-bold text-2xl my-2">Notes associées au projet</h2>
                    <button className="btn btn-primary">Ajouter une note</button>
                </div>
                <div>
                    <div className="card w-80 bg-base-100 shadow-xl my-4">
                        <div className="card-body">
                            <h3 className="card-title my-1">Compte rendu de la visio équipe 17/08</h3>
                            <p className="badge badge-primary font-bold my-1">Suivi de projet</p>
                            <p>17/08/2023</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectItem;