import { CapacitorSQLite, SQLiteConnection } from "@capacitor-community/sqlite"
import { useEffect } from "react";
import Link from "next/link";
import chaoData from '../../seed-data';


const Home: React.FC = () => {
    
    const mySQLite = new SQLiteConnection(CapacitorSQLite)
    
    const loadJSON = async () => {
        return await mySQLite.importFromJson(JSON.stringify(chaoData))
    }

    const initializeDB = async () => {
        let ret: any;
        try {
            ret = await CapacitorSQLite.checkConnectionsConsistency({
                dbNames: ["testdb"],
                openModes: ["RW"]
            })
        } catch {(e: any) => {
                console.log("Catch", e);
            }
        }

        let db: any;
        console.log("HELLO", ret)
        if (ret.result) {
            db = await mySQLite.retrieveConnection("testdb", false)
        } else {
            console.log("hello")
            db = await mySQLite.createConnection(
                "testdb",
                false,
                "no-encryption",
                1,
                false
                );
        }

        return db
    }

    useEffect(() => {
        initializeDB().then((db:any) => {
            // window.alert("initialized " + JSON.stringify(db, null, 2))
            return loadJSON();
        }).then((res: any) => {
            window.alert(JSON.stringify(res, null, 2));
        })
    }, [])
    return (
        <div className="mt-10">
            <h1>Home</h1>
            <Link href="/">Back</Link>
        </div>
    )
}

export default Home;