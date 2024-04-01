export default function HomepageLayout({children}){
    return(
        <div className="w-100 h-screen border-2 d-flex">
            <nav>
                <a>Home</a>
                <a>Manage</a>
            </nav>
            <div>
                {children}
            </div>
        </div>
    );
}