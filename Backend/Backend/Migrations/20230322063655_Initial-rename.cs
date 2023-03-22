using Microsoft.EntityFrameworkCore.Migrations;

namespace Backend.Migrations
{
    public partial class Initialrename : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_MyData",
                table: "MyData");

            migrationBuilder.RenameTable(
                name: "MyData",
                newName: "AppData");

            migrationBuilder.AddPrimaryKey(
                name: "PK_AppData",
                table: "AppData",
                column: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_AppData",
                table: "AppData");

            migrationBuilder.RenameTable(
                name: "AppData",
                newName: "MyData");

            migrationBuilder.AddPrimaryKey(
                name: "PK_MyData",
                table: "MyData",
                column: "Id");
        }
    }
}
