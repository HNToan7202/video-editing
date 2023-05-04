using MongoDB.Driver;
namespace video_editing_api.Model
{
    public class DbConfig
    {
        public string ConnectionString { get; set; }
        public string DbName { get; set; }
    }
    public class MyMongoClient
    {
        private readonly IMongoDatabase _database;

        public MyMongoClient(DbConfig config)
        {
            var client = new MongoClient(config.ConnectionString);
            _database = client.GetDatabase(config.DbName);
        }

        public IMongoCollection<T> GetCollection<T>(string collectionName)
        {
            return _database.GetCollection<T>(collectionName);
        }
    }
}
